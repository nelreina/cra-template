import MaterialTable from "material-table";
import React from "react";

const AppTable = ({
  data,
  columns,
  options,
  title = "App Table",
  ...props
}) => {
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
          ...options,
        }}
        {...props}
      />
    </div>
  );
};

export default AppTable;
