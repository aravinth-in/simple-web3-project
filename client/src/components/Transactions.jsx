import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4 w-full">
        <h3 className="text-white text-3xl text-center my-2">
          {currentAccount
            ? "Latest Transactions"
            : "Connect your account to see the latest transactions"}
        </h3>

        <div className="overflow-x-auto mt-10">
          <table className="min-w-full border-collapse text-white text-sm">
            <thead>
              <tr className="bg-[#20232a] text-left">
                <th className="py-3 px-4 border-b border-gray-600">From</th>
                <th className="py-3 px-4 border-b border-gray-600">To</th>
                <th className="py-3 px-4 border-b border-gray-600">Amount (ETH)</th>
                <th className="py-3 px-4 border-b border-gray-600">Message</th>
                <th className="py-3 px-4 border-b border-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {[...transactions].reverse().map((tx, i) => (
                <tr key={i} className="hover:bg-[#2c2f36]">
                  <td className="py-2 px-4 border-b border-gray-700">
                    <a
                      href={`https://sepolia.etherscan.io/address/${tx.addressFrom}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#37c7da]"
                    >
                      {shortenAddress(tx.addressFrom)}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700">
                    <a
                      href={`https://sepolia.etherscan.io/address/${tx.addressTo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#37c7da]"
                    >
                      {shortenAddress(tx.addressTo)}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700">{tx.amount}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{tx.message || "-"}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{tx.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
