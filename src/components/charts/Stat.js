import { FcPieChart } from "react-icons/fc";
import axios from "axios";
import { useEffect, useState } from "react";
function Stat() {
  const [stats, setStats] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_LOCAL_URL_GET_STAT).then((response) => {
      setStats(response.data);
    });
  }, []);
  if (!stats) return null;
  return (
    <>
      <div className=''>
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
        <div className='p-4 border  rounded '>
          <table className='table table-hover w-100 '>
            <thead className='thead-dark'>
              <tr className='bg-light py-2'>
                <th colSpan={5}>
                  E'lonlar soni:
                  <span className='text-primary mx-1'>
                    {stats.responseClaim.total + stats.responseRequest.total}
                  </span>
                  ta
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
              <tr className='bg-light py-2'>
                <th>JAMI</th>
                <th className='text-center'>
                  {stats.responseClaim.tender.total}
                </th>
                <th className='text-center'>
                  {stats.responseRequest.auction.total}
                </th>
                <th className='text-center'>
                  {stats.responseRequest.electronicShop.total}
                </th>
                <th className='text-center'>
                  {stats.responseClaim.competition.total}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='p-4 border mt-4  rounded'>
          <table className='table table-hover w-100  '>
            <thead className='thead-dark'>
              <tr className='bg-light py-2'>
                <th colSpan={6}>
                  Shartnomalar soni:
                  <span className='text-primary mx-1'>
                    {stats.contractResult.total}
                  </span>
                  ta
                </th>
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
              <tr className='bg-light py-2'>
                <th>JAMI</th>
                <th className='text-center'>
                  {stats.contractResult.tender.total}
                </th>
                <th className='text-center'>
                  {stats.contractResult.auction.total}
                </th>
                <th className='text-center'>
                  {stats.contractResult.electronicShop.total}
                </th>
                <th className='text-center'>
                  {stats.contractResult.competition.total}
                </th>
                <th className='text-center'>
                  {stats.contractResult.directContracts.total}
                </th>
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
