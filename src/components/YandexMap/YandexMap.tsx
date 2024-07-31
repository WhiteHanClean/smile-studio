// components/YandexMap.js
import React from 'react';
import Head from 'next/head';

const YandexMap = () => {
  return (
    <>
      <Head>
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
      </Head>
      <div className="contacts_content_cart">
        <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px', zIndex: 1 }}></a>
        <a href="https://yandex.ru/maps/213/moscow/house/bolshoy_drovyanoy_pereulok_18/Z04YcAJoTkYEQFtvfXt1dH9jZQ==/?ll=37.661557%2C55.745037&utm_medium=mapframe&utm_source=maps&z=17.89" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px', zIndex: 1 }}></a>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=37.661557%2C55.745037&mode=whatshere&whatshere%5Bpoint%5D=37.658733%2C55.745301&whatshere%5Bzoom%5D=17&z=17.89" width="312" height="312" frameBorder="0" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', borderRadius: '50%' }}></iframe>
      </div>
    </>
  );
};

export default YandexMap;
