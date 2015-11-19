module.exports = transform;

var mapping = {
    'GB-TRF': 'Greater Manchester', // Trafford - metropolitan district
    'GB-WRX': 'Wrexham', // Wrexham - unitary authority (Wales)
    'GB-BEN': 'London', // Brent - borough
    'GB-HRW': 'London', // Harrow - borough
    'GB-WRT': 'Cheshire', // Warrington - unitary authority
    'GB-LBH': 'London', // Lambeth - borough
    'GB-DAL': 'Durham', // Darlington - unitary authority
    'GB-WRL': 'Merseyside', // Wirral - metropolitan district
    'GB-MYL': 'County Antrim', // Moyle - district council area (Northern Ireland)
    'GB-BEX': 'London', // Bexley - borough
    'GB-BUR': 'Greater Manchester', // Bury - metropolitan district
    'GB-FER': 'County Fermanagh', // Fermanagh - district council area (Northern Ireland)
    'GB-NBL': 'Northumberland', // Northumberland - unitary authority
    'GB-DRY': 'County Londonderry', // Derry - district council area (Northern Ireland)
    'GB-CKF': 'County Antrim', // Carrickfergus - district council area (Northern Ireland)
    'GB-ERY': 'East Riding of Yorkshire', // East Riding of Yorkshire - unitary authority
    'GB-HCK': 'London', // Hackney - borough
    'GB-CRY': 'London', // Croydon - borough
    'GB-ABE': 'Aberdeenshire', // Aberdeen City - council area (Scotland)
    'GB-ABD': 'Aberdeenshire', // Aberdeenshire - council area (Scotland)
    'GB-CKT': 'County Tyrone', // Cookstown - district council area (Northern Ireland)
    'GB-ERW': 'Renfrewshire', // East Renfrewshire - council area (Scotland)
    'GB-HIL': 'London', // Hillingdon - borough
    'GB-NLN': 'Lincolnshire', // North Lincolnshire - unitary authority
    'GB-WSX': 'West Sussex', // West Sussex - two-tier county
    'GB-BIR': 'West Midlands', // Birmingham - metropolitan district
    'GB-WBK': 'Berkshire', // West Berkshire - unitary authority
    'GB-EDU': 'Dunbartonshire', // East Dunbartonshire - council area (Scotland)
    'GB-WSM': 'London', // Westminster - borough
    'GB-STS': 'Staffordshire', // Staffordshire - two-tier county
    'GB-HRT': 'Hertfordshire', // Hertfordshire - two-tier county
    'GB-LSB': 'County Antrim', // Lisburn - district council area (Northern Ireland)
    'GB-EDH': 'Edinburgh', // Edinburgh, City of - council area (Scotland)
    'GB-HRY': 'London', // Haringey - borough
    'GB-LAN': 'Lancashire', // Lancashire - two-tier county
    'GB-RIC': 'London', // Richmond upon Thames - borough
    'GB-LRN': 'County Antrim', // Larne - district council area (Northern Ireland)
    'GB-ZET': 'Shetland Isles', // Shetland Islands - council area (Scotland)
    'GB-ELS': 'Western Isles', // Eilean Siar - council area (Scotland)
    'GB-NTA': 'County Antrim', // Newtownabbey - district council area (Northern Ireland)
    'GB-SRY': 'Surrey', // Surrey - two-tier county
    'GB-BMH': 'Dorset', // Bournemouth - unitary authority
    'GB-NTL': 'Neath Port Talbot', // Neath Port Talbot - unitary authority (Wales)
    'GB-FLN': 'Flintshire', // Flintshire - unitary authority (Wales)
    'GB-NET': 'Tyne and Wear', // Newcastle upon Tyne - metropolitan district
    'GB-NTH': 'Northamptonshire', // Northamptonshire - two-tier county
    'GB-NTT': 'Nottinghamshire', // Nottinghamshire - two-tier county
    'GB-ESX': 'East Sussex', // East Sussex - two-tier county
    'GB-MRT': 'London', // Merton - borough
    'GB-OXF': 'Oxfordshire', // Oxfordshire - two-tier county
    'GB-MRY': 'Moray', // Moray - council area (Scotland)
    'GB-ESS': 'Essex', // Essex - two-tier county
    'GB-SOS': 'Essex', // Southend-on-Sea - unitary authority
    'GB-PEM': 'Pembrokeshire', // Pembrokeshire - unitary authority (Wales)
    'GB-NTY': 'Tyne and Wear', // North Tyneside - metropolitan district
    'GB-CHS': 'Cheshire', // Cheshire - 
    'GB-NEL': 'Lincolnshire', // North East Lincolnshire - unitary authority
    'GB-HAL': 'Cheshire', // Halton - unitary authority
    'GB-RFW': 'Renfrewshire', // Renfrewshire - council area (Scotland)
    'GB-LUT': 'Bedfordshire', // Luton - unitary authority
    'GB-WOK': 'Berkshire', // Wokingham - unitary authority
    'GB-WOR': 'Hereford and Worcester', // Worcestershire - two-tier county
    'GB-HLD': 'Highland', // Highland - council area (Scotland)
    'GB-MFT': 'County Londonderry', // Magherafelt - district council area (Northern Ireland)
    'GB-NSM': 'Somerset', // North Somerset - unitary authority
    'GB-LDS': 'West Yorkshire', // Leeds - metropolitan district
    'GB-KWL': 'Merseyside', // Knowsley - metropolitan district
    'GB-SOM': 'Somerset', // Somerset - two-tier county
    'GB-AGY': 'Anglesey/Sir Fon', // Isle of Anglesey - unitary authority (Wales)
    'GB-BST': 'Bristol', // Bristol, City of - unitary authority
    'GB-EAL': 'London', // Ealing - borough
    'GB-RDB': 'London', // Redbridge - borough
    'GB-CSR': 'County Antrim', // Castlereagh - district council area (Northern Ireland)
    'GB-RDG': 'Berkshire', // Reading - unitary authority
    'GB-CMA': 'Cumbria', // Cumbria - two-tier county
    'GB-CMD': 'London', // Camden - borough
    'GB-MON': 'Monmouthshire', // Monmouthshire - unitary authority (Wales)
    'GB-OLD': 'Greater Manchester', // Oldham - metropolitan district
    'GB-CON': 'Cornwall', // Cornwall - unitary authority
    'GB-CMN': 'Carmarthenshire', // Carmarthenshire - unitary authority (Wales)
    'GB-EAY': 'Ayrshire', // East Ayrshire - council area (Scotland)
    'GB-HEF': 'Hereford and Worcester', // Herefordshire, County of - unitary authority
    'GB-ROT': 'South Yorkshire', // Rotherham - metropolitan district
    'GB-NAY': 'Ayrshire', // North Ayrshire - council area (Scotland)
    'GB-BBD': 'Lancashire', // Blackburn with Darwen - unitary authority
    'GB-TOF': 'Torfaen', // Torfaen - unitary authority (Wales)
    'GB-WDU': 'Dunbartonshire', // West Dunbartonshire - council area (Scotland)
    'GB-WLL': 'West Midlands', // Walsall - metropolitan district
    'GB-WLN': 'West Lothian', // West Lothian - council area (Scotland)
    'GB-GRE': 'London', // Greenwich - borough
    'GB-MIK': 'Buckinghamshire', // Milton Keynes - unitary authority
    'GB-KEC': 'London', // Kensington and Chelsea - borough
    'GB-MAN': 'Greater Manchester', // Manchester - metropolitan district
    'GB-WLV': 'West Midlands', // Wolverhampton - metropolitan district
    //'GB-WLS': '', // Wales - principality
    'GB-ELN': 'East Lothian', // East Lothian - council area (Scotland)
    'GB-KIR': 'West Yorkshire', // Kirklees - metropolitan district
    'GB-STH': 'Hampshire', // Southampton - unitary authority
    'GB-KEN': 'Kent', // Kent - two-tier county
    'GB-STY': 'Tyne and Wear', // South Tyneside - metropolitan district
    'GB-LCE': 'Leicestershire', // Leicester - unitary authority
    'GB-ARM': 'County Armagh', // Armagh - district council area (Northern Ireland)
    'GB-BKM': 'Buckinghamshire', // Buckinghamshire - two-tier county
    'GB-SLG': 'Buckinghamshire', // Slough - unitary authority
    'GB-SLF': 'Greater Manchester', // Salford - metropolitan district
    'GB-ORK': 'Orkney', // Orkney Islands - council area (Scotland)
    'GB-ARD': 'County Down', // Ards - district council area (Northern Ireland)
    'GB-SLK': 'Lanarkshire', // South Lanarkshire - council area (Scotland)
    'GB-BRY': 'London', // Bromley - borough
    'GB-STT': 'Durham', // Stockton-on-Tees - unitary authority
    'GB-POL': 'Dorset', // Poole - unitary authority
    'GB-BRC': 'Berkshire', // Bracknell Forest - unitary authority
    'GB-SHN': 'Merseyside', // St. Helens - metropolitan district
    'GB-POW': 'Powys', // Powys - unitary authority (Wales)
    'GB-KTT': 'London', // Kingston upon Thames - borough
    'GB-BRD': 'West Yorkshire', // Bradford - metropolitan district
    'GB-CRF': 'Cardiff', // Cardiff - unitary authority (Wales)
    'GB-STB': 'County Tyrone', // Strabane - district council area (Northern Ireland)
    'GB-STE': 'Staffordshire', // Stoke-on-Trent - unitary authority
    'GB-DBY': 'Derbyshire', // Derbyshire - two-tier county
    'GB-STG': 'Stirlingshire', // Stirling - council area (Scotland)
    'GB-AGB': 'Argyll and Bute', // Argyll and Bute - council area (Scotland)
    'GB-DEV': 'Devon', // Devon - two-tier county
    'GB-WIL': 'Wiltshire', // Wiltshire - unitary authority
    'GB-DER': 'Sandwell', // Derby - unitary authority
    'GB-HNS': 'London', // Hounslow - borough
    'GB-SAW': 'West Midlands', // Sandwell - metropolitan district
    'GB-PLY': 'Devon', // Plymouth - unitary authority
    //'GB-NIR': '', // Northern Ireland - province
    'GB-THR': 'Essex', // Thurrock - unitary authority
    'GB-BAS': 'Somerset', // Bath and North East Somerset - unitary authority
    'GB-FIF': 'Fife', // Fife - council area (Scotland)
    'GB-DEN': 'Denbighshire', // Denbighshire - unitary authority (Wales)
    'GB-SAY': 'Ayrshire', // South Ayrshire - council area (Scotland)
    'GB-NFK': 'Norfolk', // Norfolk - two-tier county
    'GB-TFW': 'Shropshire', // Telford and Wrekin - unitary authority
    'GB-BNE': 'London', // Barnet - borough
    'GB-BNB': 'County Down', // Banbridge - district council area (Northern Ireland)
    'GB-TOB': 'Devon', // Torbay - unitary authority
    'GB-CGN': 'Ceredigion', // Ceredigion - unitary authority (Wales)
    'GB-BFS': 'County Antrim', // Belfast - district council area (Northern Ireland)
    'GB-BNH': 'East Sussex', // Brighton and Hove - unitary authority
    'GB-WAR': 'Warwickshire', // Warwickshire - two-tier county
    'GB-CGV': 'County Armagh', // Craigavon - district council area (Northern Ireland)
    'GB-BNS': 'South Yorkshire', // Barnsley - metropolitan district
    'GB-TWH': 'London', // Tower Hamlets - borough
    'GB-ANS': 'Angus', // Angus - council area (Scotland)
    'GB-FAL': 'Falkirk', // Falkirk - council area (Scotland)
    'GB-NYK': 'North Yorkshire', // North Yorkshire - two-tier county
    'GB-ANT': 'County Antrim', // Antrim - district council area (Northern Ireland)
    'GB-SWD': 'Wiltshire', // Swindon - unitary authority
    'GB-IOS': 'Cornwall', // Isles of Scilly - 
    'GB-WNM': 'Berkshire', // Windsor and Maidenhead - unitary authority
    'GB-IOW': 'Isle of Wight', // Isle of Wight - unitary authority
    'GB-GLS': 'Gloucestershire', // Gloucestershire - two-tier county
    'GB-SFT': 'Merseyside', // Sefton - metropolitan district
    'GB-IVC': 'Inverclyde', // Inverclyde - council area (Scotland)
    'GB-WND': 'London', // Wandsworth - borough
    'GB-LEC': 'Leicestershire', // Leicestershire - two-tier county
    'GB-SWK': 'London', // Southwark - borough
    'GB-YOR': 'North Yorkshire', // York - unitary authority
    'GB-GLG': 'Glasgow', // Glasgow City - council area (Scotland)
    'GB-RUT': 'Rutland', // Rutland - unitary authority
    'GB-HMF': 'London', // Hammersmith and Fulham - borough
    'GB-SFK': 'Suffolk', // Suffolk - two-tier county
    'GB-LEW': 'London', // Lewisham - borough
    'GB-NYM': 'County Armagh', // Newry and Mourne - district council area (Northern Ireland)
    'GB-DUD': 'West Midlands', // Dudley - metropolitan district
    'GB-CLR': 'County Londonderry', // Coleraine - district council area (Northern Ireland)
    'GB-CWY': 'Conwy', // Conwy - unitary authority (Wales)
    'GB-SND': 'Tyne and Wear', // Sunderland - metropolitan district
    'GB-BPL': 'Lancashire', // Blackpool - unitary authority
    'GB-VGL': 'Glamorgan', // Vale of Glamorgan, The - unitary authority (Wales)
    'GB-WFT': 'London', // Waltham Forest - borough
    'GB-LND': 'London', // London, City of - city corporation
    'GB-CLD': 'West Yorkshire', // Calderdale - metropolitan district
    'GB-GWN': 'Gwynedd', // Gwynedd - unitary authority (Wales)
    'GB-DUR': 'Durham', // Durham - unitary authority
    //'GB-SCT': '', // Scotland - country
    'GB-CLK': 'Clackmannanshire', // Clackmannanshire - council area (Scotland)
    //'GB-ENG': '', // England - country
    'GB-MDW': 'Kent', // Medway - unitary authority
    'GB-SCB': 'Scottish Borders', // Scottish Borders, The - council area (Scotland)
    'GB-DNC': 'South Yorkshire', // Doncaster - metropolitan district
    'GB-TAM': 'Greater Manchester', // Tameside - metropolitan district
    'GB-WGN': 'Greater Manchester', // Wigan - metropolitan district
    'GB-DGY': 'Dumfries and Galloway', // Dumfries and Galloway - council area (Scotland)
    'GB-PTE': 'Cambridgeshire', // Peterborough - unitary authority
    'GB-SKP': 'Greater Manchester', // Stockport - metropolitan district
    'GB-NWP': 'Newport', // Newport - unitary authority (Wales)
    'GB-ISL': 'London', // Islington - borough
    'GB-SGC': 'Gloucestershire', // South Gloucestershire - unitary authority
    'GB-CAY': 'Caerphilly', // Caerphilly - unitary authority (Wales)
    'GB-DGN': 'County Tyrone', // Dungannon and South Tyrone - district council area (Northern Ireland)
    'GB-WKF': 'West Yorkshire', // Wakefield - metropolitan district
    'GB-NWM': 'London', // Newham - borough
    'GB-MDB': 'North Yorkshire', // Middlesbrough - unitary authority
    'GB-CAM': 'Cambridgeshire', // Cambridgeshire - two-tier county
    'GB-SWA': 'Swansea', // Swansea - unitary authority (Wales)
    'GB-DOW': 'County Down', // Down - district council area (Northern Ireland)
    'GB-BLA': 'County Antrim', // Ballymena - district council area (Northern Ireland)
    'GB-HAV': 'London', // Havering - borough
    'GB-DOR': 'Dorset', // Dorset - two-tier county
    'GB-GAT': 'Tyne and Wear', // Gateshead - metropolitan district
    'GB-POR': 'Hampshire', // Portsmouth - unitary authority
    'GB-NLK': 'Lanarkshire', // North Lanarkshire - council area (Scotland)
    'GB-LIV': 'Merseyside', // Liverpool - metropolitan district
    'GB-LIN': 'Lincolnshire', // Lincolnshire - two-tier county
    'GB-HAM': 'Hampshire', // Hampshire - two-tier county
    'GB-BLY': 'County Antrim', // Ballymoney - district council area (Northern Ireland)
    'GB-NDN': 'County Down', // North Down - district council area (Northern Ireland)
    'GB-BDF': 'Bedfordshire', // Bedfordshire - unitary authority
    'GB-BDG': 'London', // Barking and Dagenham - borough
    'GB-SOL': 'West Midlands', // Solihull - metropolitan district
    'GB-OMH': 'County Tyrone', // Omagh - district council area (Northern Ireland)
    'GB-HPL': 'County Durham', // Hartlepool - unitary authority
    'GB-COV': 'West Midlands', // Coventry - metropolitan district
    'GB-SHR': 'Shropshire', // Shropshire - unitary authority
    'GB-PKN': 'Perth and Kinross', // Perth and Kinross - council area (Scotland)
    'GB-LMV': 'County Londonderry', // Limavady - district council area (Northern Ireland)
    'GB-RCH': 'Greater Manchester', // Rochdale - metropolitan district
    'GB-SHF': 'South Yorkshire', // Sheffield - metropolitan district
    'GB-NGM': 'Nottinghamshire', // Nottingham - unitary authority
    'GB-RCT': 'Rhondda Cynon Taff', // Rhondda, Cynon, Taff - unitary authority (Wales)
    'GB-BOL': 'Greater Manchester', // Bolton - metropolitan district
    'GB-BGW': 'Blaenau Gwent', // Blaenau Gwent - unitary authority (Wales)
    'GB-ENF': 'London', // Enfield - borough
    'GB-DND': 'Dundee', // Dundee City - council area (Scotland)
    'GB-STN': 'London', // Sutton - borough
    'GB-MLN': 'Midlothian', // Midlothian - council area (Scotland)
    'GB-RCC': 'North Yorkshire', // Redcar and Cleveland - unitary authority
    'GB-BGE': 'Bridgend', // Bridgend - unitary authority (Wales)
    'GB-KHL': 'East Riding of Yorkshire', // Kingston upon Hull, City of - unitary authority
    'GB-MTY': 'Merthyr Tydfil' // Merthyr Tydfil - unitary authority (Wales)
}

function transform(map) {
    var result = {};
    for(var name in mapping) {
        if(mapping.hasOwnProperty(name)) {
            result[mapping[name]] = (result[mapping[name]] || 0) + (map[name] ? map[name].count : 0);
        }
    }
    return result;
}
