import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AppTable from "../components/layout/AppTable";
import { useQuery } from "react-query";
import { fetchResource } from "../services/api";
import { find } from "lodash";
import { useApp } from "../services/AppProvider";

const MasterData = () => {
  const { resource } = useParams();

  return (
    <Layout title="Settings" padding={false}>
      <Suspense fallback={"Loading Redflags... "}>
        <ResourceTable resource={resource} />
      </Suspense>
    </Layout>
  );
};

export default MasterData;

const ResourceTable = ({ resource }) => {
  const params = { resource };
  const { formSettings } = useApp();
  const { data } = useQuery([resource], async () => fetchResource(params), {
    suspense: true,
  });

  const setting = find(formSettings, { resource }, {});

  return (
    <AppTable
      data={data}
      title={resource}
      columns={setting && setting.columns}
      onRowClick={(_, rowdata) =>
        console.log(
          "LOG:  ~ file: MasterData.jsx ~ line 39 ~ ResourceTable ~ rowdata",
          rowdata
        )
      }
    />
  );
};
