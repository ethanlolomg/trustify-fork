import { CashIcon } from "@heroicons/react/solid"
import { formatDistanceToNow } from "date-fns"
import { useSession } from "next-auth/react"

import { History } from "../../../lib/database/prisma"

type Props = {
  item: History
}

export default function HistoryItem({ item }: Props): JSX.Element {
  const { data: session } = useSession()

  const user = session.user

  const send = item.from === user["address"]
  let description: string
  let amount: string
  if (send) {
    description = `Transfer to ${item.to}`
    amount = `-${item.amount}`
  } else {
    description = `Transfer from ${item.from}`
    amount = item.amount
  }

  return (
    <>
      <tr className="bg-gray-300">
        <td className="px-6 py-4 text-sm text-right text-gray-200 whitespace-nowrap">
          {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
        </td>

        <td className="w-full px-6 py-4 text-sm text-gray-200 max-w-0 whitespace-nowrap">
          <div className="flex">
            <span className="inline-flex space-x-2 text-sm truncate group">
              <CashIcon
                className="flex-shrink-0 w-5 h-5 text-gray-200 group-hover:text-gray-200"
                aria-hidden="true"
              />
              <p className="text-gray-200 truncate group-hover:text-gray-200">
                {description}
              </p>
            </span>
          </div>
        </td>
        <td className="px-6 py-4 text-sm text-right text-gray-200 whitespace-nowrap">
          <span className="font-medium text-gray-200">{amount} </span>
          VUSDC
        </td>
      </tr>
    </>
  )
}
