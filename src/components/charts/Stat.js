import { FcPieChart } from "react-icons/fc";
function Stat() {
  return (
    <>
      <div className='container'>
        <div class='d-flex justify-content-between my-4 border-bottom'>
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

        <table className='table table-hover w-100'>
          <thead className='thead-dark'>
            <tr>
              <td
                colSpan={5}
                className='text-start bg-light py-2 text-secondary '
              >
                Savdo turlari bo'yicha
              </td>
            </tr>
            <tr>
              <th>Holati</th>
              <th>Tender</th>
              <th>Auksion</th>
              <th>Elektron do'kon</th>
              <th>Konkurs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kelishuv amalga oshgan (3)</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Tasdiqlangan</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Ro'yhatga olindi (4)</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Ro'yhatga olishdagi xatolik (0)</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>O'chirilgan (3)</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Stat;
