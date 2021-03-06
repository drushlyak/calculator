$allAccounts = {
	'01 ':'Основные средства',
	'02 ':'Амортизация основных средств',
	'03 ':'Доходные вложения в материальные ценности',
	'04 ':'Нематериальные активы',
	'05 ':'Амортизация нематериальных активов',
	'07 ':'Оборудование к установке',
	'08 ':'Вложения во внеоборотные активы',
	'09 ':'Отложенные налоговые активы',
	'10 ':'Материалы',
	'11 ':'Животные на выращивании и откорме',
	'14 ':'Резервы под снижение стоимости материальных ценностей',
	'15 ':'Заготовление и приобретение материальных ценностей',
	'16 ':'Отклонение в стоимости материальных ценностей',
	'19 ':'Налог на добавленную стоимость по приобретенным ценностям',
	'20 ':'Основное производство',
	'21 ':'Полуфабрикаты собственного производства',
	'23 ':'Вспомогательные производства',
	'25 ':'Общепроизводственные расходы',
	'26 ':'Общехозяйственные расходы',
	'28 ':'Брак в производстве',
	'29 ':'Обслуживающие производства и хозяйства',
	'40 ':'Выпуск продукции (работ, услуг)',
	'41 ':'Товары',
	'42 ':'Торговая наценка',
	'43 ':'Готовая продукция',
	'44 ':'Расходы на продажу',
	'45 ':'Товары отгруженные',
	'46 ':'Выполненные этапы по незавершенным работам',
	'50 ':'Касса',
	'51 ':'Расчетные счета',
	'52 ':'Валютные счета',
	'55 ':'Специальные счета в банках',
	'57 ':'Переводы в пути',
	'58 ':'Финансовые вложения',
	'59 ':'Резервы под обесценение финансовых вложений',
	'60 ':'Расчеты с поставщиками и подрядчиками',
	'62 ':'Расчеты с покупателями и заказчиками',
	'63 ':'Резервы по сомнительным долгам',
	'66 ':'Расчеты по краткосрочным кредитам и займам',
	'67 ':'Расчеты по долгосрочным кредитам и займам',
	'68 ':'Расчеты по налогам и сборам',
	'69 ':'Расчеты по социальному страхованию и обеспечению',
	'70 ':'Расчеты с персоналом по оплате труда',
	'71 ':'Расчеты с подотчетными лицами',
	'73 ':'Расчеты с персоналом по прочим операциям',
	'75 ':'Расчеты с учредителями',
	'76 ':'Расчеты с разными дебиторами и кредиторами',
	'77 ':'Отложенные налоговые обязательства',
	'79 ':'Внутрихозяйственные расчеты',
	'80 ':'Уставный капитал',
	'81 ':'Собственные акции (доли)',
	'82 ':'Резервный капитал',
	'83 ':'Добавочный капитал',
	'84 ':'Нераспределенная прибыль (непокрытый убыток)',
	'86 ':'Целевое финансирование',
	'90 ':'Продажи',
	'91 ':'Прочие доходы и расходы',
	'94 ':'Недостачи и потери от порчи ценностей',
	'96 ':'Резервы предстоящих расходов',
	'97 ':'Расходы будущих периодов',
	'98 ':'Доходы будущих периодов',
	'99 ':'Прибыли и убытки',
	'001 ':'Арендованные основные средства',
	'002 ':'Товарно-материальные ценности, принятые на ответственное хранение',
	'003 ':'Материалы, принятые в переработку',
	'004 ':'Товары, принятые на комиссию',
	'005 ':'Оборудование, принятое для монтажа',
	'006 ':'Бланки строгой отчетности',
	'007 ':'Списанная в убыток задолженность неплатежеспособных дебиторов',
	'008 ':'Обеспечения обязательств и платежей полученные',
	'009 ':'Обеспечения обязательств и платежей выданные',
	'010 ':'Износ основных средств',
	'011 ':'Основные средства, сданные в аренду'
	};


$credit = {
'01':['02','11','76','79','80','83','91','94','99'],
'02':['02','08','20','23','25','26','29','44','79','83','91','97'],
'03':['01','02','76','80','91','94','99'],
'04':['05','20','23','25','26','29','44','76','79','80','91','97'],
'05':['08','20','23','25','26','29','44','79','97'],
'07':['08','23','76','79','80','91','94','99'],
'08':['01','03','04','76','79','80','91','94','99'],
'09':['68','99'],
'10':['08','10','20','23','25','26','28','29','44','45','76','79','80','91','94','97','99'],
'11':['08','11','20','23','29','45','76','79','80','90','91','94','99'],
'14':['91'],
'15':['07','10','11','16','41','76','79','80','91'],
'16':['08','15','20','23','25','26','29','44','79','80','91','94','97','99'],
'19':['08','20','23','25','26','29','44','68','91','94','99'],
'20':['10','11','15','20','21','28','40','43','45','76','79','80','86','90','91','94','99'],
'21':['20','23','25','26','28','45','76','79','80','90','91','94','99'],
'23':['07','08','10','11','15','20','21','23','25','26','28','29','40','43','44','45','73','76','79','80','90','91','94','96','97','99'],
'25':['10','20','23','28','29','76','79','97','99'],
'26':['08','10','20','23','28','29','76','79','86','90','97','99'],
'28':['','10','20','23','29','73','76','91','96','99'],
'29':['10','11','25','26','29','40','43','44','45','73','76','79','80','90','91','94','96','97','99'],
'40':['10','20','21','23','28','43','79','90'],
'41':['10','20','41','44','45','76','79','80','90','94','97','99'],
'42':['41','44','90','94'],
'43':['10','20','23','25','26','28','44','45','76','79','80','90','94','97','99'],
'44':['10','11','15','45','76','79','90','94','99'],
'45':['76','79','90','94','99'],
'46':['62'],
'50':['50','51','52','55','57','58','60','62','66','68','69','70','71','73','75','76','79','80','81','94','99'],
'51':['04','50','51','52','55','57','58','60','62','66','67','68','69','70','71','73','75','76','79','80','81','84','96','99'],
'52':['04','50','51','52','55','57','58','60','62','66','67','68','69','70','71','73','75','76','79','80','81','84','96','99'],
'55':['04','50','51','52','60','62','66','67','68','69','70','71','75','76','79','80','81','84'],
'57':['50','51','52','62','73'],
'58':['51','52','76','80','90','91','99'],
'59':['91'],
'60':['07','08','10','11','15','19','20','23','25','26','28','29','41','44','50','51','52','55','60','76','79','91','94','97'],
'62':['50','51','52','55','57','60','62','63','66','67','73','75','76','79'],
'63':['91'],
'66':['07','08','10','11','41','50','51','52','55','60','66','68','76','82','91'],
'67':['07','08','10','11','41','50','51','52','55','60','67','68','76','82','91'],
'68':['08','10','11','15','20','23','26','29','41','44','51','52','55','70','75','90','91','98','99'],
'69':['08','20','23','25','26','28','29','44','51','52','70','73','91','96','97','99'],
'70':['08','20','23','25','26','28','29','44','69','76','79','84','91','96','97','99'],
'71':['07','08','10','11','15','20','23','25','26','28','29','41','44','45','50','51','52','55','70','73','76','79','91','94','97','99'],
'73':['41','50','51','52','70','76','91','94','99'],
'75':['07','08','10','11','15','20','41','50','51','52','55','58','80','83','84'],
'76':['01','03','04','07','08','10','11','15','19','20','23','25','26','28','29','41','44','45','50','51','52','55','57','58','60','62','63','66','67','70','71','73','76','79','91','94','96','97','99'],
'77':['68'],
'79':['01','02','04','05','07','08','10','11','15','16','20','21','23','25','26','29','40','41','43','44','45','50','51','52','55','57','60','62','70','71','73','76','84','90','91','97','99'],
'80':['01','03','04','07','08','10','11','15','16','20','21','23','29','41','43','50','51','52','55','58','75','83','84'],
'81':['73','80','91'],
'82':['84'],
'83':['01','02','75','84','86'],
'84':['73','75','79','80','82','83','84','99'],
'86':['07','08','10','11','15','20','41','50','51','52','55','76'],
'90':['46','50','51','52','57','62','76','79','98','99'],
'91':['07','08','10','11','14','15','20','21','23','28','29','41','43','45','50','51','52','55','57','58','59','60','62','63','66','67','71','73','75','76','79','81','96','98','99'],
'94':['08','20','23','25','26','29','44','70','73','86','91','99'],
'96':['08','20','23','25','26','29','44','97'],
'97':['08','10','20','23','25','26','29','44','76','79','96','99'],
'98':['08','50','51','52','55','58','73','76','86','91','94'],
'99':['10','50','51','52','55','60','73','76','79','84','90','91','94','96']
};

$debit = { 
'01':['03','08','76','79','80','83'],
'02':['01','02','03','79','83'],
'03':['08','76','80'],
'04':['08','51','52','55','76','79','80'],
'05':['04','79'],
'07':['15','23','60','66','67','71','75','76','79','80','86','91'],
'08':['02','05','07','10','11','16','19','23','26','60','66','67','68','69','70','71','75','76','79','80','86','91','94','96','97','98'],
'09':['68'],
'10':['10','15','20','23','25','26','28','29','40','41','43','44','60','66','67','68','71','75','76','79','80','86','91','97','99'],
'11':['01','11','15','20','23','29','44','60','66','67','68','71','75','76','79','80','86','91'],
'14':['91'],
'15':['16','20','23','44','60','68','71','75','76','79','80','86','91'],
'16':['15','79','80'],
'19':['60','76'],
'20':['02','04','05','10','11','16','19','20','21','23','25','26','28','40','41','43','60','68','69','70','71','75','76','79','80','86','91','94','96','97'],
'21':['20','23','40','79','80','91'],
'23':['02','04','05','07','10','11','16','19','21','23','25','26','28','40','43','60','68','69','70','71','76','79','80','91','94','96','97'],
'25':['02','04','05','10','16','19','21','23','29','43','60','69','70','71','76','79','94','96','97'],
'26':['02','04','05','10','16','19','21','23','29','43','60','68','69','70','71','76','79','94','96','97'],
'28':['10','20','21','23','25','26','40','43','60','69','70','71','76','91'],
'29':['02','04','05','10','11','16','19','23','25','26','28','29','60','68','69','70','71','76','79','80','91','94','96','97'],
'40':['20','23','29','79'],
'41':['15','41','42','60','66','67','68','71','73','75','76','79','80','86','91'],
'42':['storno'],
'43':['20','23','29','40','79','80','91'],
'44':['02','04','05','10','16','19','23','29','41','42','43','60','68','69','70','71','76','79','94','96','97'],
'45':['10','11','20','21','23','29','41','43','44','71','76','79','91'],
'46':['90'],
'50':['50','51','52','55','57','60','62','66','67','71','73','75','76','79','80','86','90','91','98','99'],
'51':['50','51','52','55','57','58','60','62','66','67','68','69','71','73','75','76','79','80','86','90','91','98','99'],
'52':['50','51','52','55','57','58','60','62','66','67','68','69','71','73','75','76','79','80','86','90','91','98','99'],
'55':['50','51','52','60','62','66','67','68','71','75','76','79','80','86','91','98','99'],
'57':['50','51','52','62','76','79','90','91'],
'58':['','50','51','52','75','76','80','91','98'],
'59':['91'],
'60':['50','51','52','55','60','62','66','67','76','79','91','99'],
'62':['46','50','51','52','55','57','62','76','79','90','91'],
'63':['62','76','91'],
'66':['50','51','52','55','62','66','76','91'],
'67':['51','52','55','62','67','76','91'],
'68':['19','50','51','52','55','66','67'],
'69':['50','51','52','55','70'],
'70':['50','51','52','55','68','69','71','73','76','79','94'],
'71':['50','51','52','55','76','79','91'],
'73':['23','28','29','50','51','52','57','62','69','71','76','79','81','84','91','94','98','99'],
'75':['50','51','52','55','62','68','80','83','84','91'],
'76':['01','03','04','07','08','10','11','15','20','21','23','25','26','28','29','41','43','44','45','50','51','52','55','58','60','62','66','67','70','71','73','76','79','86','90','91','97','98','99'],
'77':['68','99'],
'79':['01','02','04','05','07','08','10','11','15','16','20','21','23','25','26','29','40','41','43','44','45','50','51','52','55','60','62','70','71','76','84','90','91','97','99'],
'80':['01','03','04','07','08','10','11','15','16','20','21','23','29','41','43','50','51','52','55','58','75','81','84'],
'81':['50','51','52','55','91'],
'82':['66','67','84'],
'83':['01','02','75','80','84'],
'84':['51','52','55','70','75','79','80','82','83','84','99'],
'86':['20','26','83','98'],
'90':['11','20','21','23','26','29','40','41','42','43','44','45','58','68','79','99'],
'91':['01','02','03','04','07','08','10','11','14','15','16','19','20','21','23','28','29','58','59','60','63','66','67','68','69','70','71','73','76','79','81','94','98','99'],
'94':['01','03','07','08','10','11','16','19','20','21','23','29','41','42','43','44','45','50','60','71','73','76','98','99'],
'96':['23','28','29','51','52','69','70','76','91','97','99'],
'97':['02','04','05','10','16','23','25','26','29','41','43','60','69','70','71','76','79','96'],
'98':['68','90','91'],
'99':['01','03','07','08','10','11','16','19','20','21','23','25','26','28','29','41','43','44','45','50','51','52','58','68','69','70','71','73','76','79','84','90','91','97']
};


$subAccounts = {
'01':['По видам основных средств'],
'03':['По видам материальных ценностей'],
'04':['По видам нематериальных активов и по расходам на научно-исследовательские, опытно-конструкторские и технологические работы'],
'08':['1. Приобретение земельных участков','2. Приобретение объектов природопользования','3. Строительство объектов основных средств','4. Приобретение объектов основных средств','5. Приобретение нематериальных активов','6. Перевод молодняка животных в основное стадо','7. Приобретение взрослых животных','8. Выполнение научно-исследовательских, опытно-конструкторских и технологических работ'],
'10':['1. Сырье и материалы','2. Покупные полуфабрикаты и комплектующие изделия, конструкции и детали','3. Топливо','4. Тара и тарные материалы','5. Запасные части','6. Прочие материалы','7. Материалы, переданные в переработку на сторону','8. Строительные материалы','9. Инвентарь и хозяйственные принадлежности','10. Специальная оснастка и специальная одежда на складе','11. Специальная оснастка и специальная одежда в эксплуатации'],
'19':['1. Налог на добавленную стоимость при приобретении основных средств','2. Налог на добавленную стоимость по приобретенным нематериальным активам','3. Налог на добавленную стоимость по приобретенным материально-производственным запасам'],
'41':['1. Товары на складах','2. Товары в розничной торговле','3. Тара под товаром и порожняя','4. Покупные изделия'],
'50':['1. Касса организации','2. Операционная касса','3. Денежные документы'],
'55':['1. Аккредитивы','2. Чековые книжки','3. Депозитные счета'],
'58':['1. Паи и акции','2. Долговые ценные бумаги','3. Предоставленные займы','4. Вклады по договору простого товарищества'],
'66':['По видам кредитов и займов'],
'67':['По видам кредитов и займов'],
'68':['По видам налогов и сборов'],
'69':['1. Расчеты по социальному страхованию','2. Расчеты по пенсионному обеспечению','3. Расчеты по обязательному медицинскому страхованию'],
'73':['1. Расчеты по предоставленным займам','2. Расчеты по возмещению материального ущерба'],
'75':['1. Расчеты по вкладам в уставный (складочный) капитал','2. Расчеты по выплате доходов'],
'76':['1. Расчеты по имущественному и личному страхованию','2. Расчеты по претензиям','3. Расчеты по причитающимся дивидендам и другим доходам','4. Расчеты по депонированным суммам'],
'79':['1. Расчеты по выделенному имуществу','2. Расчеты по текущим операциям','3. Расчеты по договору доверительного управления имуществом'],
'86':['По видам финансирования'],
'90':['1. Выручка','2. Себестоимость продаж','3. Налог на добавленную стоимость','4. Акцизы','9. Прибыль/убыток от продаж'],
'91':['1. Прочие доходы','2. Прочие расходы','9. Сальдо прочих доходов и расходов'],
'96':['По видам резервов'],
'97':['По видам расходов'],
'98':['1. Доходы, полученные в счет будущих периодов','2. Безвозмездные поступления','3. Предстоящие поступления задолженности по недостачам, выявленным за прошлые годы','4. Разница между суммой, подлежащей взысканию с виновных лиц, и балансовой стоимостью по недостачам ценностей'],
};