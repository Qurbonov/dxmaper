import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Accordion from 'react-bootstrap/Accordion';

const ContractsInfo = () => {
  const [rabbitData, setRbtData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({});
  const [etp, setEtp] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://192.168.7.54:8585/v1/atm/getResultats', {
        params: {
          limit: 100,
          offset: 1,
          ...query,
        },
      })
      .then((response) => {
        console.log(response.data);
        setRbtData(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const columns = React.useMemo(() => [
    {
      name: 'ETP',
      selector: (row) => {
        // eslint-disable-next-line default-case
        switch (row.etp_id) {
          case 1:
            return 'UZEX';
          case 2:
            return 'XT-Xarid';
          case 3:
            return 'Coopiration';
          case 4:
            return 'Shaffof qurilish';
        }
      },
      sortable: true,
      reorder: true,
      width: '6%',
    },
    {
      name: 'Savdo turi',
      selector: (row) => {
        // eslint-disable-next-line default-case
        // 22.04.2021 йилдаги ЎРҚ-684-сон
        // 30-модда. Харид қилиш тартиб-таомилларини амалга ошириш турлари
        // Харид қилиш тартиб-таомилларини амалга ошириш турлари қуйидагилардан иборат:
        // 1.электрон дўкон;
        // 2.бошланғич нархни пасайтириш учун ўтказиладиган аукцион;
        // 3.энг яхши таклифларни танлаш;
        // 4.тендер;
        // 5.тўғридан-тўғри шартномалар бўйича амалга ошириладиган давлат харидлари;
        // eslint-disable-next-line default-case
        switch (row.proc_id) {
          case 6:
            return 'Elektron katalog';
          case 3:
            return 'Auksion (Amalga oshirilgan savdo)';
          case 17:
            return 'Tender';
          case 18:
            return 'Konkurs';
          case 19:
            return "To'g'ridan to'g'ri shartnoma";
        }
      },
      sortable: true,
      width: '9%',
    },
    {
      name: 'Lot raqami1',
      selector: (row) => (
        <div>
          <Link to={`/details/${row.id}`}>{row.lot_id}</Link>
        </div>
      ),
      sortable: true,
      reorder: true,
      width: '7%',
    },
    {
      name: 'Tashkilot nomi (xaridor)',

      selector: (row) => row.organ_name,
      sortable: true,
      reorder: true,
      wrap: true,
      width: '8%',
    },
    {
      name: 'Tashkilot STIRi (xaridor)',
      selector: (row) => row.inn,
      sortable: true,
      reorder: true,
    },

    {
      name: 'Etkazib beruvchi tashkilot',
      selector: (row) => row.vendor_name,
      sortable: true,
      reorder: true,
      wrap: true,
      width: '8%',
    },
    {
      name: 'Etkazib beruvchi STIR raqami',
      selector: (row) => row.vendor_inn,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Ma`lumot',
      selector: (row) => row.purpose,
      sortable: true,
      reorder: true,
      wrap: true,
      width: '30%',
    },
    {
      name: 'Beneficiar',
      selector: (row) => row.beneficiar,
      sortable: true,
      reorder: true,
    },

    {
      name: 'Shartnoma raqami',
      selector: (row) => row.contract_num,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Shartnoma sanasi',
      selector: (row) => row.contract_dat,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Shartnoma boshlanish sanasi',
      selector: (row) => row.contract_beg,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Shartnoma tugatish sanasi',
      selector: (row) => row.contract_end,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Umumiy summa',
      selector: (row) => row.summa,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Avans',
      selector: (row) => row.p_avans,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Avans kuni',
      selector: (row) => row.avans_day,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Tashkilot turi',
      selector: (row) => (row.maloy === 'Y' ? 'Kichik bizness' : 'Tashkilot'),
      sortable: true,
      reorder: true,
    },
  ]);

  const onChange = (e, type) => {
    const mQuery = {};
    mQuery[type] = e.target.value;
    setQuery({
      ...query,
      ...mQuery,
    });
    // setEtp(e.target.value);
    // getResultats(e.target.value);
  };

  return (
    <>
      <div className='container mt-3 rounded rounded-top'>
        <Accordion>
          <Accordion.Item eventKey='0' className='bg-light'>
            <Accordion.Header>Filter</Accordion.Header>
            <Accordion.Body>
              <div className='border px-3 py-3'>
                <div className='row'>
                  <div className='col-sm'>
                    ETP:
                    <select
                      className='form-control form-control-sm'
                      value={etp}
                      onChange={(e) => onChange(e, 'etpId')}
                    >
                      <option value='1'>UZEX</option>
                      <option value='2'>XT-Xarid</option>
                      <option value='3'>Coopiration</option>
                      <option value='4'>Shaffof qurilish</option>
                    </select>
                  </div>
                  <div className='col-sm'>
                    Lot raqami
                    <input
                      type='text'
                      onChange={(e) => onChange(e, 'lotId')}
                      className='form-control  form-control-sm'
                    />
                  </div>{' '}
                  <div className='col-sm'>
                    Shartnoma raqami
                    <input
                      type='text'
                      onChange={(e) => onChange(e, 'contractNum')}
                      className='form-control  form-control-sm'
                    />
                  </div>
                  {/* <div className='col-sm'>
                    Shartnoma sanasi
                    <DatePicker
                      dateFormat='dd.MM.yyyy'
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className='red-border'
                    />
                  </div>
                  <div className='col-sm'>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                    />
                  </div> */}
                </div>
                <div className='row mt-3'>
                  <div className='col-sm'>
                    Xaridor STIR raqami:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, 'organInn')}
                      className='form-control  form-control-sm'
                    />
                  </div>{' '}
                  <div className='col-sm'>
                    Xaridor tashkilot:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, 'organName')}
                      className='form-control  form-control-sm'
                    />
                  </div>
                  <div className='col-sm'>
                    Etkazib beruvchi tashkilot STIR raqami:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, 'vendorInn')}
                      className='form-control  form-control-sm'
                    />
                  </div>{' '}
                  <div className='col-sm'>
                    Etkazib beruvchi tashkilot:
                    <input
                      type='text'
                      onChange={(e) => onChange(e, 'vendorName')}
                      className='form-control  form-control-sm'
                    />
                  </div>
                </div>
                {/* <div className='row mt-3'>
                  <div className='col-sm'>
                    <input type='submit' value='yubor' />
                  </div>
                </div> */}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='w-100 min-vh-100 m-3'>
        <div className='shadow rounded-0'>
          <DataTable
            title='Sharnoma ma`lumotlari'
            columns={columns}
            data={rabbitData}
            pagination
            dense
            responsive
            highlightOnHover
            striped
            progressPending={loading}
          />
        </div>
      </div>
    </>
  );
};

export default ContractsInfo;
