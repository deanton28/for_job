<<<<<<< HEAD
=======
const regionEmploye = {
  mc: [
    {
      photo: 'img/no_foto.svg',
      name: 'Лысенко Эдуард Анатольевич',
      position: 'Министр Правительства Москвы, руководитель Департамента информационных технологий города Москвы',
      phone: '+7 (495) 620-20-00<br>(доб. 11133)',
      email: 'PR_Lysenko@mos.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Бородин Андрей Александрович',
      position: 'Заместитель руководителя Департамента информационных технологий города Москвы',
      phone: '+7 (495) 620-20-00<br>(доб. 11534)',
      email: 'BorodinAA@mos.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Иванов Дмитрий Александрович',
      position: 'Директор департамента системы государственных услуг Департамента информационных технологий города Москвы',
      phone: '+7 (495) 620-20-00<br>(доб. 11138)',
      email: 'IvanovDA@mos.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Бутурлин Иван Александрович',
      position: 'Начальник аналитического управления Департамента информационных технологий города Москвы',
      phone: '+7 (495) 620-20-00<br>(доб. 11528)',
      email: 'ButurlinIA@mos.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Онтоев Дмитрий Владимирович',
      position: 'Заместитель начальника аналитического управления Департамента информационных технологий города Москвы',
      phone: '+7 (495) 620-20-00<br>(доб. 77302)',
      email: 'OntoevDV@it.mos.ru',
    },
  ],
  sp: [
    {
      photo: 'img/no_foto.svg',
      name: 'Кучеренко Анастасия Сергеевна',
      position: 'Начальник отдела по взаимодействию с органами власти и организациями при предоставлении государственных и муниципальных услуг',
      phone: '+7 (812) 576-48-39',
      email: 'kucherenko.a@kis.gov.spb.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Воронина Ксения Геннадьевна',
      position: 'Главный специалист отдела по взаимодействию с органами власти и организациями при предоставлении государственных и муниципальных услуг',
      phone: '+7 (812) 576-48-53',
      email: 'voronina@kis.gov.spb.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Лихолетов Андрей Вольдемарович',
      position: 'Начальник отдела информационно-компьютерной безопасности Управления информационной безопасности и технической защиты информации',
      phone: '+7 (812) 576-78-52',
      email: 'likholetov@kis.gov.spb.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Бушихин Игорь Викторович',
      position: 'Начальник отдела городских телекоммуникаций и развития сетей связи',
      phone: '+7 (812) 576-44-35',
      email: 'bushihin@kis.gov.spb.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Соловьева Екатерина Олеговна',
      position: 'Начальник сектора мониторинга общественного мнения',
      phone: '+7 (812) 576-79-60',
      email: 'solovyeva@kis.gov.spb.ru',
    },
  ],
  sl: [
    {
      photo: 'img/no_foto.svg',
      name: 'Осипова Александра Александровна',
      position: 'Заместитель начальника Главного управления - начальник управления информатизации',
      phone: '+7 (8692) 41-76-76',
      email: 'a.osipova@sev.gov.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Тимофеев Денис Александрович',
      position: 'Заместитель начальника Главного управления',
      phone: '+7 (8692) 40-41-90',
      email: 'denis.timofeev@sev.gov.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Чугунов Андрей Анатольевич',
      position: 'Начальник Управления цифрового развития и реализации государственных программ',
      phone: '',
      email: 'andrey.chugunov@sev.gov.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Черноусова Татьяна Романовна',
      position: 'Заместитель начальника управления - начальник отдела планирования и цифрового развития Управления цифрового развития и реализации государственных программ',
      phone: '+7 (8692) 41-76-95',
      email: 'tatiana.chernousova@sev.gov.ru',
    },
    {
      photo: 'img/no_foto.svg',
      name: 'Мирошниченко Юлия Владимировна',
      position: 'Главный специалист-эксперт отдела планирования и цифрового развития Управления цифрового развития и реализации государственных программ',
      phone: '+7 (8692) 54-37-65',
      email: 'yulia.miroshnichenko@sev.gov.ru',
    },
  ],
};

console.log(regionEmploye.mc[0].name);

const regionContactsList = [
  {
    code: 'mc',
    name: 'г. Москва',
    picture: 'img/coat/coat_mc.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.mc,
  },
  {
    code: 'sp',
    name: 'г. Санкт-Петербург',
    picture: 'img/coat/coat_sp.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.sp,
  },
  {
    code: 'sl',
    name: 'г. Севастополь',
    picture: 'img/coat/coat_sl.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.sl,
  },
  {
    code: 'al',
    name: 'Алтайский край',
    picture: 'img/coat/coat_al.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.al,
  },
  {
    code: 'am',
    name: 'Амурская область',
    picture: 'img/coat/coat_am.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.am,
  },
  {
    code: 'ar',
    name: 'Архангельская область',
    picture: 'img/coat/coat_ar.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ar,
  },
  {
    code: 'as',
    name: 'Астраханская область',
    picture: 'img/coat/coat_as.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.as,
  },
  {
    code: 'bl',
    name: 'Белгородская область',
    picture: 'img/coat/coat_bl.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.bl,
  },
  {
    code: 'bn',
    name: 'Брянская область',
    picture: 'img/coat/coat_bn.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.bn,
  },
  {
    code: 'vm',
    name: 'Владимирская область',
    picture: 'img/coat/coat_vm.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.vm,
  },
  {
    code: 'vl',
    name: 'Волгоградская область',
    picture: 'img/coat/coat_vl.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.vl,
  },
  {
    code: 'vo',
    name: 'Вологодская область',
    picture: 'img/coat/coat_vo.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.vo,
  },
  {
    code: 'vn',
    name: 'Воронежская область',
    picture: 'img/coat/coat_vn.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.vn,
  },
  {
    code: 'eu',
    name: 'Еврейская автономная область',
    picture: 'img/coat/coat_eu.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.eu,
  },
  {
    code: 'zb',
    name: 'Забайкальский край',
    picture: 'img/coat/coat_zb.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.zb,
  },
  {
    code: 'iv',
    name: 'Ивановская область',
    picture: 'img/coat/coat_iv.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.iv,
  },
  {
    code: 'ir',
    name: 'Иркутская область',
    picture: 'img/coat/coat_ir.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ir,
  },
  {
    code: 'kb',
    name: 'Кабардино-Балкарская Республика',
    picture: 'img/coat/coat_kb.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.kb,
  },
  {
    code: 'kn',
    name: 'Калининградская область',
    picture: 'img/coat/coat_kn.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.kn,
  },
  {
    code: 'kj',
    name: 'Калужская область',
    picture: 'img/coat/coat_kj.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.kj,
  },
  {
    code: 'ka',
    name: 'Камчатский край',
    picture: 'img/coat/coat_ka.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ka,
  },
  {
    code: 'kc',
    name: 'Карачаево-Черкесская Республика',
    picture: 'img/coat/coat_kc.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.kc,
  },
  {
    code: 'km',
    name: 'Кемеровская область',
    picture: 'img/coat/coat_km.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.km,
  },
  {
    code: 'ki',
    name: 'Кировская область',
    picture: 'img/coat/coat_ki.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ki,
  },
  {
    code: 'kt',
    name: 'Костромская область',
    picture: 'img/coat/coat_kt.svg',
    link: '#',
    place: '-',
    index: '-/-',
  },
  {
    code: 'ks',
    name: 'Краснодарский край',
    picture: 'img/coat/coat_ks.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ks,
  },
  {
    code: 'kr',
    name: 'Красноярский край',
    picture: 'img/coat/coat_kr.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.kr,
  },
  {
    code: 'ku',
    name: 'Курганская область',
    picture: 'img/coat/coat_ku.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ku,
  },
  {
    code: 'ky',
    name: 'Курская область',
    picture: 'img/coat/coat_ky.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ky,
  },
  {
    code: 'le',
    name: 'Ленинградская область',
    picture: 'img/coat/coat_le.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.le,
  },
  {
    code: 'lp',
    name: 'Липецкая область',
    picture: 'img/coat/coat_lp.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.lp,
  },
  {
    code: 'ma',
    name: 'Магаданская область',
    picture: 'img/coat/coat_ma.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ma,
  },
  {
    code: 'mo',
    name: 'Московская область',
    picture: 'img/coat/coat_mo.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.mo,
  },
  {
    code: 'mu',
    name: 'Мурманская область',
    picture: 'img/coat/coat_mu.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.mu,
  },
  {
    code: 'ne',
    name: 'Ненецкий автономный округ',
    picture: 'img/coat/coat_ne.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ne,
  },
  {
    code: 'nn',
    name: 'Нижегородская область',
    picture: 'img/coat/coat_nn.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.nn,
  },
  {
    code: 'no',
    name: 'Новгородская область',
    picture: 'img/coat/coat_no.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.no,
  },
  {
    code: 'nv',
    name: 'Новосибирская область',
    picture: 'img/coat/coat_nv.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.nv,
  },
  {
    code: 'om',
    name: 'Омская область',
    picture: 'img/coat/coat_om.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.om,
  },
  {
    code: 'ob',
    name: 'Оренбургская область',
    picture: 'img/coat/coat_ob.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ob,
  },
  {
    code: 'or',
    name: 'Орловская область',
    picture: 'img/coat/coat_or.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.or,
  },
  {
    code: 'pz',
    name: 'Пензенская область',
    picture: 'img/coat/coat_pz.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.pz,
  },
  {
    code: 'pe',
    name: 'Пермский край',
    picture: 'img/coat/coat_pe.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.pe,
  },
  {
    code: 'pr',
    name: 'Приморский край',
    picture: 'img/coat/coat_pr.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.pr,
  },
  {
    code: 'ps',
    name: 'Псковская область',
    picture: 'img/coat/coat_ps.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ps,
  },
  {
    code: 'ad',
    name: 'Республика Адыгея',
    picture: 'img/coat/coat_ad.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ad,
  },
  {
    code: 'lt',
    name: 'Республика Алтай',
    picture: 'img/coat/coat_lt.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.lt,
  },
  {
    code: 'bs',
    name: 'Республика Башкортостан',
    picture: 'img/coat/coat_bs.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.bs,
  },
  {
    code: 'br',
    name: 'Республика Бурятия',
    picture: 'img/coat/coat_br.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.br,
  },
  {
    code: 'da',
    name: 'Республика Дагестан',
    picture: 'img/coat/coat_da.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.da,
  },
  {
    code: 'in',
    name: 'Республика Ингушетия',
    picture: 'img/coat/coat_in.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.in,
  },
  {
    code: 'kk',
    name: 'Республика Калмыкия',
    picture: 'img/coat/coat_kk.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.kk,
  },
  {
    code: 'kl',
    name: 'Республика Карелия',
    picture: 'img/coat/coat_kl.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.kl,
  },
  {
    code: 'ko',
    name: 'Республика Коми',
    picture: 'img/coat/coat_ko.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ko,
  },
  {
    code: 'cr',
    name: 'Республика Крым',
    picture: 'img/coat/coat_cr.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.cr,
  },
  {
    code: 'ml',
    name: 'Республика Марий Эл',
    picture: 'img/coat/coat_ml.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ml,
  },
  {
    code: 'mr',
    name: 'Республика Мордовия',
    picture: 'img/coat/coat_mr.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.mr,
  },
  {
    code: 'sa',
    name: 'Республика Саха (Якутия)',
    picture: 'img/coat/coat_sa.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.sa,
  },
  {
    code: 'so',
    name: 'Республика Северная Осетия-Алания',
    picture: 'img/coat/coat_so.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.so,
  },
  {
    code: 'ta',
    name: 'Республика Татарстан',
    picture: 'img/coat/coat_ta.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ta,
  },
  {
    code: 'tv',
    name: 'Республика Тыва',
    picture: 'img/coat/coat_tv.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.tv,
  },
  {
    code: 'hk',
    name: 'Республика Хакасия',
    picture: 'img/coat/coat_hk.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.hk,
  },
  {
    code: 'ro',
    name: 'Ростовская область',
    picture: 'img/coat/coat_ro.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ro,
  },
  {
    code: 'rz',
    name: 'Рязанская область',
    picture: 'img/coat/coat_rz.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.rz,
  },
  {
    code: 'ss',
    name: 'Самарская область',
    picture: 'img/coat/coat_ss.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ss,
  },
  {
    code: 'sr',
    name: 'Саратовская область',
    picture: 'img/coat/coat_sr.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.sr,
  },
  {
    code: 'sh',
    name: 'Сахалинская область',
    picture: 'img/coat/coat_sh.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.sh,
  },
  {
    code: 'sv',
    name: 'Свердловская область',
    picture: 'img/coat/coat_sv.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.sv,
  },
  {
    code: 'sm',
    name: 'Смоленская область',
    picture: 'img/coat/coat_sm.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.sm,
  },
  {
    code: 'st',
    name: 'Ставропольский край',
    picture: 'img/coat/coat_st.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.st,
  },
  {
    code: 'tb',
    name: 'Тамбовская область',
    picture: 'img/coat/coat_tb.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.tb,
  },
  {
    code: 'tr',
    name: 'Тверская область',
    picture: 'img/coat/coat_tr.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.tr,
  },
  {
    code: 'tm',
    name: 'Томская область',
    picture: 'img/coat/coat_tm.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.tm,
  },
  {
    code: 'tl',
    name: 'Тульская область',
    picture: 'img/coat/coat_tl.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.tl,
  },
  {
    code: 'tu',
    name: 'Тюменская область',
    picture: 'img/coat/coat_tu.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.tu,
  },
  {
    code: 'ud',
    name: 'Удмуртская Республика',
    picture: 'img/coat/coat_ud.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ud,
  },
  {
    code: 'ul',
    name: 'Ульяновская область',
    picture: 'img/coat/coat_ul.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ul,
  },
  {
    code: 'ha',
    name: 'Хабаровский край',
    picture: 'img/coat/coat_ha.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ha,
  },
  {
    code: 'ht',
    name: 'Ханты-Мансийский автономный округ-Югра',
    picture: 'img/coat/coat_ht.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ht,
  },
  {
    code: 'ce',
    name: 'Челябинская область',
    picture: 'img/coat/coat_ce.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ce,
  },
  {
    code: 'cc',
    name: 'Чеченская Республика',
    picture: 'img/coat/coat_cc.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.cc,
  },
  {
    code: 'cu',
    name: 'Чувашская Республика',
    picture: 'img/coat/coat_cu.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.cu,
  },
  {
    code: 'ch',
    name: 'Чукотский автономный округ',
    picture: 'img/coat/coat_ch.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ch,
  },
  {
    code: 'ya',
    name: 'Ямало-Ненецкий автономный округ',
    picture: 'img/coat/coat_ya.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.ya,
  },
  {
    code: 'yr',
    name: 'Ярославская область',
    picture: 'img/coat/coat_yr.svg',
    link: '#',
    place: '-',
    index: '-/-',
    contacts: regionEmploye.yr,
  },
];

console.log(regionContactsList.length);

>>>>>>> master
const ceki = document.querySelector('.contacts-ceki');
const region = document.querySelector('.contacts-region');
const contactsPlase = document.querySelector('.contacts-ceki_wrapper');

// ----Ф-ция рендерящая карточки контактов для ЦЭКИ
const renderContactsCeki = (array) => {
  const fragmentCeki = document.createDocumentFragment();
  array.forEach((item) => {
    const newElement = document.createElement('div');
    newElement.classList.add('contact-card', 'ceki');
    newElement.innerHTML = `<table>
                              <tbody>
                                <tr>
                                  <td class="foto test" rowspan="4"><img src="${item.foto}" alt="Фото"></td>
                                  <td class="text name" colspan="2"> ${item.name}</td>
                                </tr>
                                <tr>
                                  <td class="text position" colspan="2">${item.position}</td>
                                </tr>
                                <tr>
                                  <td class="ico"><img src="icon/ico_tel.svg" alt="Иконка телефона"></td>
                                  <td class="text contact">${item.phone}</td>
                                </tr>
                                <tr>
                                  <td class="ico"><img src="icon/ico_mail.svg" alt="Почта иконка"></td>
                                  <td class="text contact"><a href="mailto:${item.email}">${item.email}</a></td>
                                </tr>
                                <tr>
                                  <td class="text question" colspan="3">${item.question}</td>
                                </tr>
                             </tbody>
                          </table>`;
    fragmentCeki.appendChild(newElement);
  });
  contactsPlase.appendChild(fragmentCeki);
};

const popup = document.querySelector('.contact-popup');

// ----Ф-ция рендерящая карточки контактов для Регионов

const renderRegionContactsCard = (arr) => {
  console.log(arr);
  const fragmentContactRegion = document.createElement('div');
  fragmentContactRegion.classList.add('wrapper');
  if (!arr) {
    fragmentContactRegion.innerHTML = 'НЕТ ДАННЫХ О КОНТАКТАХ';
    console.log(fragmentContactRegion);
    return fragmentContactRegion;
  }
  arr.forEach((item) => {
    const newElement = document.createElement('div');
    newElement.classList.add('contact-card', 'ceki');
    newElement.innerHTML = `
      <table>
        <tbody>
          <tr>
            <td class="foto" rowspan="4"><img alt="Фото" src="${item.photo}" />
            </td>
            <td class="text name" colspan="2">${item.name}
            </td>
          </tr>
          <tr>
            <td class="text position" colspan="2">${item.position}
            </td>
          </tr>
          <tr>
            <td class="ico"><img alt="Иконка телефона" src="icon/ico_tel.svg" />
            </td>
            <td class="text contact">${item.phone}
            </td>
          </tr>
          <tr>
            <td class="ico"><img alt="Почта иконка" src="icon/ico_mail.svg" />
            </td>
            <td class="text contact"><a href="mailto:${item.email}">${item.email}</a>
            </td>
          </tr>
        </tbody>
      </table>`;
    fragmentContactRegion.appendChild(newElement);
  });
  return fragmentContactRegion;
};

// renderRegionContactsCard(regionContactsList[1].contacts);

// ----Ф-ция рендерящая карточки контактов для Регионов
const renderContactsRegion = (array) => {
  const fragmentRegion = document.createDocumentFragment();
  array.forEach((item) => {
    const newElement = document.createElement('div');
    newElement.classList.add('contact-card', 'region');
    newElement.innerHTML = `<a href="${item.link}"><img class="coat" src="${item.picture}" alt="Герб региона" id ="${item.code}"></a>
                            <span class="region-name">${item.name}</span>`;
    newElement.addEventListener('click', (evt) => {
      console.log(evt.target.id);
      popup.removeAttribute('hidden');
      const contactWindow = document.createElement('div');
      contactWindow.classList.add('contactWindow');
      // ----Ищем массив с нужным кодом------
      const index = window.regionData.regionDataList.findIndex((el) => el.code === evt.target.id);
      console.log(index);
      // ------------------------------------
      contactWindow.innerHTML = `
      <div class="region-logo_wrapper">
        <p class="title title_lite-gray">МОЙ РЕГИОН</p>
        <table>
          <tr>
            <td class="coat"><img src="${item.picture}">
            </td>
            <td class="name"><b>${item.name}</b>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td class="plase title_lite-gray">МЕСТО В РЕЙТИНГЕ
            </td>
            <td class="title_lite-gray">ИНДЕКС
            </td>
          </tr>
          <tr>
            <td class="index">( ${item.place} )
            </td>
            <td class="index">( ${item.index} )
            </td>
          </tr>
        </table>
      </div>`;
      contactWindow.appendChild(renderRegionContactsCard(item.contacts));
      contactWindow.innerHTML += '<div class="close">X</div>';
      console.log(contactWindow);
      popup.appendChild(contactWindow);
      const close = contactWindow.querySelector('.close');
      close.addEventListener('click', () => {
        popup.innerHTML = '';
        popup.setAttribute('hidden', 'hidden');
      });
    });
    fragmentRegion.appendChild(newElement);
  });
  contactsPlase.appendChild(fragmentRegion);
};

renderContactsCeki(window.cekiContacts.cekiContactsList);

const switcher = document.querySelector('.switcher');

const renderContacts = (evt) => {
  contactsPlase.innerHTML = '';
  if (evt.target.id === 'button-ceki') {
    ceki.classList.add('active');
    region.classList.remove('active');
    renderContactsCeki(window.cekiContacts.cekiContactsList);
  }
  if (evt.target.id === 'button-region') {
    region.classList.add('active');
    ceki.classList.remove('active');
    renderContactsRegion(window.regionData.regionDataList);
  }
};

switcher.addEventListener('click', (evt) => {
  renderContacts(evt);
});
