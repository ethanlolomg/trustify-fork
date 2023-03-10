import Image from "next/image"
import React, { Dispatch, FC, SetStateAction } from "react"

import { Asset } from "./Demo6"

type Props = {
  assets: Asset[]
  setSelected: Dispatch<SetStateAction<Asset>>
}

const MarketList: FC<Props> = ({ assets, setSelected }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-amber-300">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                    >
                      Assets
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                    >
                      Market size
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                    >
                      Total borrowed
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                    >
                      Deposit APY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-900 uppercase"
                    >
                      Borrow APY
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900 divide-y divide-gray-200">
                  {assets.map((asset) => (
                    <tr key={asset.name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-8 h-8">
                            <Image
                              className="w-10 h-10 rounded-full"
                              src={asset.image}
                              width="32"
                              height="32"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-200">
                              {asset.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-200">
                          {asset.market}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                        {asset.borrowed}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                        {asset.deposit}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                        {asset.borrow}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className={`text-amber-400 hover:text-amber-500 ${
                            asset.tokenAddress ? "" : ""
                          }`}
                          onClick={() => {
                            if (asset.tokenAddress) {
                              setSelected(asset)
                            }
                          }}
                        >
                          Deposit
                        </a>
                        &nbsp;
                        <a
                          href="#"
                          className="text-amber-400 opacity-40 hover:text-amber-500"
                        >
                          Borrow
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarketList
