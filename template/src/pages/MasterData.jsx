import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MaterialTable from "material-table";
import { useQuery } from "react-query";
import { fetchResource } from "../services/api";
import { find } from "lodash";
import { useApp } from "../services/AppProvider";

const MasterData = () => {
  const { resource } = useParams();

  return (
    <Layout title="Settings" padding={false}>
      <Suspense fallback={"Loading Redflags... "}>
        <ResourceData resource={resource} />
      </Suspense>
    </Layout>
  );
};

export default MasterData;

const ResourceTable = ({ data, title, columns = [] }) => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        options={{
          pageSize: 25,
          pageSizeOptions: [25, 50],
          headerStyle: { position: "sticky", top: 0 },
          maxBodyHeight: "calc(100vh - 200px)",
        }}
      />
    </div>
  );
};

const ResourceData = ({ resource }) => {
  const params = { resource };
  const { formSettings } = useApp();
  const { data } = useQuery([resource], async () => fetchResource(params), {
    suspense: true,
  });

  const setting = find(formSettings, { resource }, {});

  return (
    <ResourceTable
      data={data}
      title={resource}
      columns={setting && setting.columns}
    />
  );
};
