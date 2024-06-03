import { Table } from 'antd';
import { useEffect, useState } from 'react';

import {
  useGetFlightCodeQuery,
  useGetBaggageQuery,
} from '../domain/flight-api';
import { beginDate, endDate, flightCodeMock, baggageMock } from '../mock';

import type { FlightTableType } from '../model/type';
import type { TableColumnsType } from 'antd';

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: FlightTableType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
};

const columns: TableColumnsType<FlightTableType> = [
  {
    title: 'aid',
    dataIndex: 'aid',
  },
  {
    title: 'flightNumber',
    dataIndex: 'flightNumber',
  },
  {
    title: 'code',
    dataIndex: 'code',
  },
  {
    title: 'baggageCount',
    dataIndex: 'baggageCount',
  },
];

export const FlightTable = () => {
  const {
    data: flightCode,
    isLoading: loadingFlightCode,
    isSuccess: successFlightCode,
  } = useGetFlightCodeQuery({ beginDate, endDate });
  const {
    data: baggage,
    isLoading: loadingBaggage,
    isSuccess: successBaggage,
  } = useGetBaggageQuery({ beginDate, endDate });

  const [dataTable, setDataTable] = useState<FlightTableType[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (successBaggage && successFlightCode) {
      setDataTable(
        flightCode.map((item, index) => ({
          ...item,
          baggageCount: baggage[index].baggageCount,
          key: `${item.id}`,
        }))
      );
    }
    if (!flightCode && !baggage) {
      setDataTable(
        flightCodeMock.map((item, index) => ({
          ...item,
          baggageCount: baggageMock[index].baggageCount,
          key: `${item.id}`,
        }))
      );
    }
  }, [baggage, flightCode, successBaggage, successFlightCode]);

  return (
    <Table
      style={{ width: '90vw', height: '90vh' }}
      loading={loadingFlightCode || loadingBaggage}
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      pagination={false}
      columns={columns}
      dataSource={dataTable}
    />
  );
};
