import { Table } from "flowbite-react";
import { EVAL_LIST } from "../constants/evaluation-list";

export default function Evaluation() {
  return (
    <section className="mt-4 w-full">
      <h1 className="text-xl font-extrabold text-[#f65555]">Evaluasi Model</h1>

      {EVAL_LIST.map((value, index) => {
        return (
          <>
            <h1
              className="mt-10 text-center text-lg font-extrabold text-[#f65555]"
              key={index}
            >
              {value.model}
            </h1>
            <div className="grid w-full grid-cols-2 gap-5">
              {value.result.map((value, index) => {
                return (
                  <div className="flex flex-col text-center" key={index}>
                    <h1
                      className="pt-3 text-lg font-extrabold text-[#f65555]"
                      key={index}
                    >
                      Skenario {value.scenario}
                    </h1>
                    <Table hoverable>
                      <Table.Head>
                        <Table.HeadCell>Fold</Table.HeadCell>
                        <Table.HeadCell>Epoch</Table.HeadCell>
                        <Table.HeadCell>% Train</Table.HeadCell>
                        <Table.HeadCell>% Test</Table.HeadCell>
                        <Table.HeadCell>Total Runtime</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {value.data.map((data, index) => {
                          return (
                            <Table.Row
                              key={index}
                              className="bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-800"
                            >
                              <Table.Cell>{data.fold}</Table.Cell>
                              <Table.Cell>{data.epoch}</Table.Cell>
                              <Table.Cell>{data.train_acc}%</Table.Cell>
                              <Table.Cell>{data.test_acc}%</Table.Cell>
                              <Table.Cell>{data.runtime} menit</Table.Cell>
                            </Table.Row>
                          );
                        })}
                      </Table.Body>
                    </Table>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </section>
  );
}
