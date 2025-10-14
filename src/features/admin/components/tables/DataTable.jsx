import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

/**
 * Componente reutilizable de tabla.
 * 
 * @param {Array<string>} columns - Lista de encabezados de la tabla.
 * @param {Array<Object>} data - Lista de objetos con datos. Las claves deben coincidir con los encabezados o el orden de columnas.
 * @param {function} renderActions - (opcional) Función para renderizar acciones personalizadas por fila.
 */


const DataTable = ({ columns = [], data = [], renderActions }) => {
  return (
    <div className="overflow-x-auto w-full">
      <Table hoverable={true}>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableHeadCell key={index} className="text-gray-700 dark:text-gray-300">
                {col}
              </TableHeadCell>
            ))}
            {renderActions && (
              <TableHeadCell>
                <span className="sr-only">Acciones</span>
              </TableHeadCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length + (renderActions ? 1 : 0)} className="text-center py-4">
                No hay datos disponibles
              </TableCell>
            </TableRow>
          ) : (
            data.map((item, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  >
                    {item[col] ?? "-"}
                  </TableCell>
                ))}
                {renderActions && <TableCell>{renderActions(item)}</TableCell>}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
