import React, { useEffect, useState, useContext } from "react";
import { handhaversCollection, scanmetricsCollection, settingsCollection } from "./firebase";
import { AuthContext } from './Auth'


export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [handhavers, setHandhavers] = useState([]);
  const [scanmetrics, setScanmetrics] = useState([]);
  const [settings, setSettings] = useState({ data: [] });


  const { ploeg, role } = useContext(AuthContext);
  useEffect(() => {
    console.log("Ploeg", ploeg)
    handhaversCollection.onSnapshot(handhavers => {
      let data = [];
      handhavers.forEach(item => {
        data.push({ kcnummer: item.id, ...item.data() });
      });

      setHandhavers(data)

    })
    if (role === "MT") {
      scanmetricsCollection.orderBy('scan_datetime', 'desc').onSnapshot(audits => {
        let data = [];
        audits.forEach(item => {
          data.push({ id: item.id, ...item.data() });
        });
        setScanmetrics(data);

      })
    } else if (role === "PL") {
      scanmetricsCollection.where("ploeg", "==", ploeg).orderBy('scan_datetime', 'desc').onSnapshot(audits => {
        let data = [];
        audits.forEach(item => {
          data.push({ id: item.id, ...item.data() });
        });
        setScanmetrics(data);
      })
    }



    const getSettings = async () => {
      const settings = await settingsCollection.doc('fields').get();
      if (settings.data()) {
        setSettings({ ...settings.data() })
      }

    }

    getSettings();



  }, [role, ploeg]);


  return (
    <DataContext.Provider
      value={{
        handhavers,
        scanmetrics,
        settings
      }}
    >
      {children}
    </DataContext.Provider>
  );
};