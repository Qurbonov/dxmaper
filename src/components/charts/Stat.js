import { FcPieChart } from "react-icons/fc";
import axios from "axios";
import { useEffect, useState } from "react";
function Stat() {
  const [stats, setStats] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_LOCAL_URL_GET_STAT).then((response) => {
      setStats(response.data);
      console.log(response.data);
    });
  }, []);
  if (!stats) return null;
  return (
    <>
      {/* Total:{stats.contract_info.total} <br />
      id: {stats.contract_info.proc[0].id} <br />
      code: {stats.contract_info.proc[0].state[0].code}
      <br />
      count: {stats.contract_info.proc[0].state[0].count} */}
      <div className='container'>
        <div className='d-flex justify-content-between my-4 border-bottom'>
          <div>
            <h2>Statistika</h2>
          </div>
          <div>
            <FcPieChart
              size={30}
              style={{
                color: "#1B6CA8",
              }}
            />
          </div>
        </div>
        <div className='p-4 border '>
          <table className='table table-hover w-100'>
            <thead className='thead-dark'>
              <tr className='bg-light py-2'>
                <th colSpan={4}>Arizalar</th>
                <th className='text-end'>
                  {stats.responseClaim.total + stats.responseRequest.total} ta
                </th>
              </tr>
              <tr>
                <th>Holati</th>
                <th className='text-center'>Tender</th>
                <th className='text-center'>Auksion</th>
                <th className='text-center'>Elektron do'kon</th>
                <th className='text-center'>Konkurs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ro'yhatga olingan</td>
                <td className='text-center'>
                  {stats.responseClaim.tender.succeed}
                </td>
                <td className='text-center'>
                  {stats.responseRequest.auction.succeed}
                </td>
                <td className='text-center'>
                  {stats.responseRequest.electronicShop.succeed}
                </td>
                <td className='text-center'>
                  {stats.responseClaim.competition.succeed}
                </td>
              </tr>
              <tr>
                <td>Jarayonda</td>
                <td className='text-center'>
                  {stats.responseClaim.tender.processing}
                </td>
                <td className='text-center'>
                  {stats.responseRequest.auction.processing}
                </td>
                <td className='text-center'>
                  {stats.responseRequest.electronicShop.processing}
                </td>
                <td className='text-center'>
                  {stats.responseClaim.competition.processing}
                </td>
              </tr>
              <tr>
                <td>Ro'yhatga olishda xatolik</td>
                <td className='text-center'>
                  {stats.responseClaim.tender.cancelled}
                </td>
                <td className='text-center'>
                  {stats.responseRequest.auction.cancelled}
                </td>
                <td className='text-center'>
                  {stats.responseRequest.electronicShop.cancelled}
                </td>
                <td className='text-center'>
                  {stats.responseClaim.competition.cancelled}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='p-4 border'>
          <table className='table table-hover w-100  '>
            <thead className='thead-dark'>
              <tr className='bg-light py-2'>
                <th colSpan={5}>Shartnomalar</th>
                <th className='text-end'>{stats.contractResult.total} ta</th>
              </tr>
              <tr>
                <th>Holati</th>
                <th className='text-center'>Tender</th>
                <th className='text-center'>Auksion</th>
                <th className='text-center'>Elektron do'kon</th>
                <th className='text-center'>Konkurs</th>
                <th className='text-center'>To'g'ridan to'g'ri shartnomalar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tasdiqlangan</td>
                <td className='text-center'>
                  {stats.contractResult.tender.succeed}
                </td>
                <td className='text-center'>
                  {stats.contractResult.auction.succeed}
                </td>
                <td className='text-center'>
                  {stats.contractResult.electronicShop.succeed}
                </td>
                <td className='text-center'>
                  {stats.contractResult.competition.succeed}
                </td>
                <td className='text-center'>
                  {stats.contractResult.directContracts.succeed}
                </td>
              </tr>
              <tr>
                <td>Jarayonda</td>
                <td className='text-center'>
                  {stats.contractResult.tender.processing}
                </td>
                <td className='text-center'>
                  {stats.contractResult.auction.processing}
                </td>
                <td className='text-center'>
                  {stats.contractResult.electronicShop.processing}
                </td>
                <td className='text-center'>
                  {stats.contractResult.competition.processing}
                </td>
                <td className='text-center'>
                  {stats.contractResult.directContracts.processing}
                </td>
              </tr>
              <tr>
                <td>Bekor qilingan</td>
                <td className='text-center'>
                  {stats.contractResult.tender.cancelled}
                </td>
                <td className='text-center'>
                  {stats.contractResult.auction.cancelled}
                </td>
                <td className='text-center'>
                  {stats.contractResult.electronicShop.cancelled}
                </td>
                <td className='text-center'>
                  {stats.contractResult.competition.cancelled}
                </td>
                <td className='text-center'>
                  {stats.contractResult.directContracts.cancelled}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
    </>
  );
}

export default Stat;
