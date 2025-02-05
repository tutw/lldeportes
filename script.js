document.addEventListener('DOMContentLoaded', () => {
  // Clock update function
  function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    clock.textContent = now.toLocaleDateString('es-ES', options);
  }

  // Update clock and date immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);

  const linksContainer = document.getElementById('links-container');
  
  const iframeUrls = {
    'liga-btn': 'https://widgets.futbolenlatv.com/partidos/competition/la-liga?color=000&culture=es-ES',
    'liga2-btn': 'https://widgets.futbolenlatv.com/partidos/competition/segunda-division-espana?color=000&culture=es-ES',
    'champions-btn': 'https://widgets.futbolenlatv.com/partidos/competition/liga-campeones?color=000&culture=es-ES',
    'f1-btn': 'https://widgets.futbolenlatv.com/partidos/deporte/automovilismo?color=000&culture=es-ES',
    'motogp-btn': 'https://widgets.futbolenlatv.com/partidos/deporte/motociclismo?color=000&culture=es-ES',
    'tenis-btn': 'https://widgets.futbolenlatv.com/partidos/deporte/tenis?color=000&culture=es-ES',
  };

  const links = [
    { type: 'button-group', buttons: [
      { text: 'LIGA', id: 'liga-btn' },
      { text: 'LIGA 2a', id: 'liga2-btn' },
      { text: 'CHAMPIONS', id: 'champions-btn' },
      { text: 'F1', id: 'f1-btn' },
      { text: 'MOTOGP', id: 'motogp-btn' },
      { text: 'TENIS', id: 'tenis-btn' },
      { text: 'TODO EL FUTBOL', id: 'todo-btn' }
    ]},
    { type: 'title', text: 'ENLACES' },
    { type: 'button-group', buttons: [
      { text: 'ELCANO.TOP', id: 'canales1-btn' },
      { text: 'TRONOSS', id: 'canales2-btn' },
      { text: 'TOKYOGHOULL', id: 'canales3-btn' }
    ]},
  ];

  linksContainer.innerHTML = '';

  links.forEach(link => {
    if (link.type === 'button-group') {
      const buttonGroup = document.createElement('div');
      buttonGroup.classList.add('button-group');
      
      link.buttons.forEach(buttonInfo => {
        const button = document.createElement('a');
        button.textContent = buttonInfo.text;
        button.href = '#';
        button.id = buttonInfo.id;
        button.classList.add('link-button');
        buttonGroup.appendChild(button);
      });
      
      linksContainer.appendChild(buttonGroup);
    } else if (link.type === 'title') {
      const titleElement = document.createElement('h2');
      titleElement.textContent = link.text;
      titleElement.classList.add('enlaces-title');
      linksContainer.appendChild(titleElement);
    }
  });

  const canalesContent = document.createElement('div');
  canalesContent.id = 'canales-content';
  canalesContent.style.display = 'none';

  const canalesLinks = [
    { type: 'title', text: 'LA LIGA' },
    { text: 'MOVISTAR+ 1080', url: 'acestream://56ac8e227d526e722624675ccdd91b0cc850582f' },
    { text: 'M+ LALIGA BAR', url: 'acestream://608b0faf7d3d25f6fe5dba13d5e4b4142949990e' },
    { text: 'M+ LALIGA BAR', url: 'acestream://94d34491106e00394835c8cb68aa94481339b53f' },
    { text: 'M+ LALIGATV MULTI', url: 'acestream://d3de78aebe544611a2347f54d5796bd87f16c92d' },
    { text: 'M+ LALIGATV MULTI', url: 'acestream://6d05b31e5e8fdae312fbd57897363a7b10ddb163' },
    { text: 'M+ LALIGATV 1080', url: 'acestream://94d34491106e00394835c8cb68aa94481339b53f' },
    { text: 'M+ LALIGATV 720', url: 'acestream://1bc437bce57b4b0450f6d1f8d818b7e97000745e' },
    { text: 'M+ LIGA TV 2 HD', url: 'acestream://83c6c4942d69f4aa324aa746c5d7dbfd7d1572b3' },
    { text: 'M+ LALIGATV 2 720', url: 'acestream://f31a586422c9244196c810c84b6c85da350318a5' },
    { text: 'M+ LALIGATV 3 HD', url: 'acestream://835639b89db00cc0d94660da3c10b6e38bfbcdc1' },
    { text: 'M+ LALIGATV 4 HD', url: 'acestream://68697ea4f261289d97bbc3418ad3cbc4180aa32f' },
    { text: 'DAZN LALIGA MULTI', url: 'acestream://110d441ddc9713a7452588770d2bc85504672f47' },
    { text: 'DAZN LALIGA MULTI', url: 'acestream://ec29289b0b14756e686c03a501bae1efa05be70c' },
    { text: 'DAZN LALIGA MULTI', url: 'acestream://6de4794cd02f88f14354b5996823413a59a1de0f' },
    { text: 'DAZN LALIGA 720', url: 'acestream://8c8c1e047a1c5ed213ba74722a5345dc55c3c0eb' },
    { text: 'DAZN LALIGA 2 1080', url: 'acestream://97ba38d47680954be40e48bd8f43e17222fefecb' },
    { text: 'DAZN LALIGA 2 720', url: 'acestream://51dbbfb42f8091e4ea7a2186b566a40e780953d9' },
    { text: 'DAZN LA LIGA 3 1080p', url: 'acestream://8c71f0e0a5476e10950fc827f9d2a507340aba74' },
    { text: 'DAZN LA LIGA 4 1080p', url: 'acestream://2792a8a5f4a3f53cd72dec377a2639cd12a6973e' },
    { text: 'DAZN LA LIGA 5 1080p', url: 'acestream://99e544cddbee13798e854c1009ee7d1a93fdedf7' },
    { type: 'separator' },
    { type: 'title', text: 'LA LIGA HYPERMOTION' },
    { text: 'M+ LIGA HYPER 1080', url: 'acestream://b2706a7ffbea236a3b398139a3a606ada664c0eb' },
    { text: 'M+ LIGA HYPER 720', url: 'acestream://121f719ebb94193c6086ef92865cf9b197750980' },
    { text: 'M+ LIGA HYPER 2 1080', url: 'acestream://0cfdfde1b70623b8c210b0f7301be2a87456481d' },
    { text: 'M+ LIGA HYPER 2 720', url: 'acestream://0a335406bad0b658aeddb2d38f8c0614b2e5623a' },
    { text: 'M+ LIGA HYPER 3 720', url: 'acestream://20196007a6697a1f11589fd4c8bab6713c265e64' },
    { type: 'separator' },
    { type: 'title', text: 'LIGA DE CAMPEONES' },
    { text: 'M+ L.CHAMP MULTI', url: 'acestream://0a26e20f39845e928411e09a124374fccb6e1478' },
    { text: 'M+ L.CHAMP MULTI', url: 'acestream://775abd8697715c48a357906d40734ccd2a10513c' },
    { text: 'M+ L.CHAMP 720', url: 'acestream://8edb264520569b2280c5e86b2dc734e120032903' },
    { text: 'M+ L.CHAMP 2 1080', url: 'acestream://c070cdb701fc46bb79d17568d99fc64620443d63' },
    { text: 'M+ L.CHAMP 2 720', url: 'acestream://abdf9058786a48623d0de51a3adb414ae10b6e72' },
    { text: 'M+ L.CHAMP 3 1080', url: 'acestream://3618edda333dad5374ac2c801f5f14483934b97d' },
    { text: 'M+ L.CHAMP 3 720', url: 'acestream://0b348cc1ae499e810729661878764a0fab88ab69' },
    { text: 'M+ L.CHAMP 4 1080', url: 'acestream://65a18a6bd83918a9586b673fec12405aaf4e9f7d' },
    { text: 'M+ L.CHAMP 5 1080', url: 'acestream://11744c25a594e17d587ed0871fe40ff21b4bd1e0' },
    { text: 'M+ L.CHAMP 6 1080', url: 'acestream://fdda1f0dd8c33fbdc5a66ab98e291f570cae67cd' },
    { text: 'M+ L.CHAMP 7 1080', url: 'acestream://b7f47db93dced60f54e8f89e2366ed061b534049' },
    { text: 'M+ L.CHAMP 8 1080', url: 'acestream://d298c6e5c8be71f5995b45289c6388b225318b3c' },
    { text: 'M+ L.CHAMP 9 SD', url: 'acestream://2d7c4cfb3987b652a779afc894cca2fccbbacf21' },
    { text: 'M+ L.CHAMP 10 SD', url: 'acestream://c056f9e180cd7d40963129a17ff54f4ee8259353' },
    { text: 'M+ L.CHAMP 11 SD', url: 'acestream://a12a16f74cf12799d4475ae867dc61eb60e1ba2e' },
    { text: 'M+ L.CHAMP 12 SD', url: 'acestream://df7d145fcaf0566db4098d2f10236185d92bc9fd' },
    { text: 'M+ L.CHAMP 13 SD', url: 'acestream://bdfe9ebe62d690c1b13eef4346d72e618cfbe804' },
    { type: 'separator' },
    { type: 'title', text: 'FORMULA 1' },
    { text: 'DAZN FÓRMULA1 1080', url: 'acestream://d6281d4e6310269b416180442a470d23a4a99dc9' },
    { text: 'DAZN FÓRMULA1 1080', url: 'acestream://2c6e4c897661e6b0257bfe931b66d20b2ec763b6' },
    { text: 'DAZN FÓRMULA1 1080', url: 'acestream://71eef80158aa8b37f3dc59f6793c6696df9a2dfa' },
    { text: 'DAZN FÓRMULA1 720', url: 'acestream://268289e7a3c5209960b53b4d43c8c65fab294b85' },
    { text: 'DAZN F1 EMERGENCIA', url: 'acestream://http://vavoo.to/play/3129220252/index.m3u8' },
    { text: 'DAZN F1 EMERGENCIA', url: 'acestream://https://www.socialcreator.com/xupimarc2/huhu.to/play/3129220252/index.m3u8' },
    { type: 'separator' },
    { type: 'title', text: 'OTROS CANALES' },
    { text: 'DAZN 1 1080', url: 'acestream://7cf0086fa7d478f51dbba952865c79e66cb9add5' },
    { text: 'DAZN 1 720', url: 'acestream://35c7f0c966ecde3390f4510bb4caded40018c07a' },
    { text: 'DAZN 2 1080', url: 'acestream://ca923c9873fd206a41c1e83ff8fc40e3cf323c9a' },
    { text: 'DAZN 2 720', url: 'acestream://a929eeec1268d69d1556a2e3ace793b2577d8810' },
    { text: 'DAZN 3 1080', url: 'acestream://19cd05c7ae26f22737ae5728b571ca36abd8a2e8' },
    { text: 'DAZN 4 1080', url: 'acestream://4e83f23945ab3e43982045f88ec31daaa4683102' },
    { text: 'MOVISTAR + 1080', url: 'acestream://56ac8e227d526e722624675ccdd91b0cc850582f' },
    { text: '#VAMOS 1080', url: 'acestream://d03c13b6723f66155d7a0df3692a3b073fe630f2' },
    { text: '#VAMOS 720', url: 'acestream://12ba546d229bc39f01c3c18988a034b215fe6adb' },
    { text: '#ELLAS 1080', url: 'acestream://d8c2ed470e847154a88f011137cc206319f6bed5' },
    { text: 'GOL PLAY', url: 'acestream://d4627f7b6b237a8556819445b3283d866caceca2' },
    { text: 'TELEDEPORTE', url: 'acestream://e2395d28ad19423212fd3aa0e81f387db3e8bb9f' },
    { text: 'BARÇA TV', url: 'acestream://e3362507e7c732b9461bd7bdc74bd054c49b3ba7' },
    { text: 'LA 1 HD', url: 'acestream://b9a81ddb0cf98d9a5ae18ba2eef0ab094bd5d5b0' },
    { text: 'LA 1 UHD', url: 'acestream://4a714c436cb67d53cf197f9038239fddab2d8b20' },
    { text: 'LA 2 HD', url: 'acestream://60106275d34f995e26bb2cc4a21a42f586c6c555' },
    { text: 'CUATRO HD', url: 'acestream://e8eec35f4662be1af96963245bfa88fb7d0242c4' },
    { text: 'TELECINCO HD', url: 'acestream://66a7e4727bccce8ccc04e54861b06b62d89452fa' },
    { text: 'TELECINCO HD', url: 'acestream://47e6dd48dd7c9705d07b13139b80e44683fd5eb1' },
    { text: 'EUROSPORT 1 1080', url: 'acestream://5e4cd48c79f991fcbee2de8b9d30c4b16de3b952' },
    { text: 'EUROSPORT 2 1080', url: 'acestream://c373da9e901d414b7384e671112e64d5a2310c29' },
    { text: 'EUROSPORT 1 1080', url: 'acestream://16ffa1713f42aa27317ee039a2bd0cdbc89a1580' },
    { text: 'EUROSPORT 2 1080', url: 'acestream://98784fa0714190de289f42eb5b84e405df7e685a' },
    { text: 'COPA ESPECIAL 1080', url: 'acestream://f785c45f32379c3b0e332c20bbd05a7fb311e8d1' },
    { text: 'COPA 1 1080', url: 'acestream://f6beccbc4eea4bc0cda43b3e8ac14790a98b61b4' },
    { text: 'COPA 2 720', url: 'acestream://b51f2d9a15b6956a44385b6be531bcabeb099d9d' },
    { text: 'M+ DEPORTES 1080', url: 'acestream://55d4602cb22b0d8a33c10c2c2f42dae64a9e8895' },
    { text: 'M+ DEPORTES 720', url: 'acestream://3a74d9869b13e763476800740c6625e715a39879' },
    { text: 'M+DEPORTES 2 1080', url: 'acestream://639c561dd57fa3fc91fde715caeb696c5efb7ce7' },
    { text: 'M+DEPORTES 3 1080', url: 'acestream://571bff4d12b1791eb99dbf20bec38e630693a6a3' },
    { text: 'M+DEPORTES 4 1080', url: 'acestream://b4d1308a61e4caf8c06ac3d6ce89d165c015c2fb' },
    { text: 'M+DEPORTES 5 1080', url: 'acestream://fcc0fd75bf1dba40b108fcf0d3514e0e549bfbac' },
    { text: 'M+DEPORTES 6 1080', url: 'acestream://cc5782d37ae6b6e0bab396dd64074982d0879046' },
    { text: 'M+DEPORTES 7 1080', url: 'acestream://070f82d6443a52962d6a2ed9954c979b29404932' }
  ];

  canalesLinks.forEach(link => {
    if (link.type === 'separator') {
      const separator = document.createElement('div');
      separator.classList.add('separator');
      canalesContent.appendChild(separator);
    } else if (link.type === 'title') {
      const title = document.createElement('h2');
      title.textContent = link.text;
      title.classList.add('section-title')
      canalesContent.appendChild(title);
    } else {
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.textContent = link.text;
      linkElement.classList.add('link-button');
      linkElement.target = '_blank';
      canalesContent.appendChild(linkElement);
    }
  });
  
  linksContainer.appendChild(canalesContent);

  // Add second list of channels
  const canales2Links = [
    { text: '#VAMOS FHD', url: 'acestream://5f593876293d0a5c3c138e904c54526cc2da3c5b' },
    { text: 'DAZN LA LIGA FHD (SAT)', url: 'acestream://25fe7c7c63b382a77f79f8f912b11dde94ea89b7' },
    { text: 'DAZN LIGA FHD MULTIAUDIO', url: 'acestream://8e1f821dcf2d12c8001423d62c73cde356b5e9c0' },
    { text: 'DAZN LA LIGA 2 FHD', url: 'acestream://db0c15253ddecbf356726f7218a38213c66d0ad1' },
    { text: 'LA LIGA TV UHD', url: 'acestream://5b6fd5b3dd0189d09bd96c55bb88814da681dabf' },
    { text: 'LA LIGA TV BAR FHD', url: 'acestream://eb3fe9045283703e50f338428e22471350660015' },
    { text: 'ORANGE LIGA (FIBRA)', url: 'acestream://0d130a990935c65910af5964d5f3dbce9dd63b05' },
    { text: 'M+ LIGA DE CAMPEONES FHD', url: 'acestream://eb47dd6510df6f6a6b4fdbb593681f2bee4bc773' },
    { text: 'M+ LIGA DE CAMPEONES FHD (ORANGE)', url: 'acestream://42a27b0e6ec5cf2663dad8a1e23af73f5aaf62e7' },
    { text: 'M+ LIGA DE CAMPEONES 2 FHD', url: 'acestream://d3faa1e424d6bede03028203c82cac69d1552944' },
    { text: 'M+ LIGA DE CAMPEONES 2 FHD (ORANGE)', url: 'acestream://3f5bb406bcd0fe75074d300a27c7be8df9c19d8e' },
    { text: 'M+ LIGA DE CAMPEONES 3 FHD', url: 'acestream://99bed20071311ab3a2710dcc5238699de5f4a4b9' },
    { text: 'M+ LIGA DE CAMPEONES 4 FHD', url: 'acestream://8cea9ac3c2e1100bb07126ed2eb8a55b507a86f7' },
    { text: 'M+ LIGA DE CAMPEONES 5 FHD', url: 'acestream://936c8d82c034f3625521939935b1c4cc11aac257' },
    { text: 'M+ LIGA DE CAMPEONES 6 SD', url: 'acestream://db620edca5bd1f186d786b60258421f129ad6fb9' },
    { text: 'M+ LIGA DE CAMPEONES 7 SD', url: 'acestream://fa99326470e0a8e20e1f0b7b018d06948a00a71d' },
    { text: 'M+ LIGA DE CAMPEONES 8 SD', url: 'acestream://45130a45e022528f8a6985c20ac93545821c4893' },
    { text: 'M+ LIGA DE CAMPEONES 14 SD', url: 'acestream://075825bfd1067d717207dd18d8df0b600f18eb05' },
    { text: 'M+ LIGA DE CAMPEONES 15 SD', url: 'acestream://a4bfeb2fc596bed93b284f4ce61c15c8a8c09863' },
    { text: 'M+ LIGA DE CAMPEONES 16 SD', url: 'acestream://2d55cf87eda866bda96d2c9b3f77a44a51cd0841' },
    { text: 'M+ LIGA DE CAMPEONES 17 SD', url: 'acestream://20b5f8c2099dd707307baa6340eb418dd40fa339' },
    { text: 'DAZN F1 FHD', url: 'acestream://3563e97bd9253c3a46912e7ec8afb52592cacdb6' },
    { text: 'DAZN F1 EMERGENCIA', url: 'acestream://9e232028581f9cd04234a86a799ddeb9854c02a9' },
    { text: 'DAZN 1 FHD', url: 'acestream://bcb879c881f85f9ab6f5171b4566c67b1347cfc8' },
    { text: 'DAZN 2 FHD', url: 'acestream://7bd69c94c90173f2f7cb8d465aeeb0123c89446a' },
    { text: 'DAZN 4 FHD', url: 'acestream://022e55502708fec364379dfdbf5b2556188eba41' },
    { text: 'DAZN EVENTOS 1', url: 'acestream://de27ac42c305261c772b9f1f6586459f9b34ea9b' },
    { text: 'DAZN EVENTOS 2', url: 'acestream://d33d285b90a72926792d63d2e706788f98f38415' },
    { text: 'MOVISTAR GOLF FHD', url: 'acestream://fa12e4d1bd80e3599fff58d0e310660e24d2ad4b' },
    { text: 'MOVISTAR GOLF 2 FHD', url: 'acestream://4a6a4c8e7655e0e7ba4aca812e199a5b79d1eea9' },
    { text: 'MOVISTAR SERIES FHD', url: 'acestream://2b9e1cddbb52f8f69d70b477ec36f87d707df31b' },
    { text: 'MOVISTAR CLASICOS FHD', url: 'acestream://ab79f3dbca2992aa041da92ede3d1e0c30245c8d' },
    { text: 'EUROSPORT 1 FHD', url: 'acestream://52472b43317984ab70ea58326cd61f6f943bb593' },
    { text: 'EUROSPORT 2 FHD', url: 'acestream://5c1e4bc4d62bfbb2e6cc0abf98db29358aec2479' },
    { text: '#VAMOS FHD 2', url: 'acestream://9692132869cf08fd8768d1240669eff8bb1129f7' },
    { text: 'ELLAS #V FHD', url: 'acestream://989dbe43fbf4def5d2e577ca8cea35ba9793b16d' },
    { text: 'DEPORTES FHD', url: 'acestream://ae4caf67cb4de140acd49fa632137a2cfa46cc4b' },
    { text: 'DEPORTES 2 FHD (SOLO EVENTOS)', url: 'acestream://7802e1c784d8b5d5e1b1534ca085990c8e5e1b67' },
    { text: 'M. ACCION FHD', url: 'acestream://0745ec9349604ddf194d2b16fa3c523e92fb9b35' },
    { text: 'M+ Super Copa', url: 'acestream://094d256765a176bbe46e09eea28e72ebceed18cd' },
    { text: 'Super Copa OrangeTV', url: 'acestream://4a2f4cd05015af4be3a61a55daec06339b9ed596' }
  ];

  const canales2Content = document.createElement('div');
  canales2Content.id = 'canales2-content';
  canales2Content.style.display = 'none';

  canales2Links.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.textContent = link.text;
    linkElement.classList.add('link-button');
    linkElement.target = '_blank';
    canales2Content.appendChild(linkElement);
  });

  linksContainer.appendChild(canales2Content);

  // Add new content for TOKYOGHOULL
  const canales3Links = [
    { text: 'M. LaLiga 1080P', url: 'acestream://94d34491106e00394835c8cb68aa94481339b53f' },
    { text: 'M. LaLiga 1080 MultiAudio', url: 'acestream://d3de78aebe544611a2347f54d5796bd87f16c92d' },
    { text: 'M. LaLiga 1080 MultiAudio', url: 'acestream://6d05b31e5e8fdae312fbd57897363a7b10ddb163' },
    { text: 'M. LaLiga 720', url: 'acestream://1bc437bce57b4b0450f6d1f8d818b7e97000745e' },
    { text: 'M. LaLiga 2 1080', url: 'acestream://83c6c4942d69f4aa324aa746c5d7dbfd7d1572b3' },
    { text: 'M. LaLiga 2 720', url: 'acestream://f31a586422c9244196c810c84b6c85da350318a5' },
    { text: 'M. LaLiga 3 1080', url: 'acestream://ebe14f1edeb49f2253e3b355a8beeadc9b4f0bc4' },
    { text: 'M. LaLiga 3 720', url: 'acestream://835639b89db00cc0d94660da3c10b6e38bfbcdc1' },
    { text: 'M. LaLiga 4 1080', url: 'acestream://68697ea4f261289d97bbc3418ad3cbc4180aa32f' },
    { text: 'La Liga BAR 1080', url: 'acestream://608b0faf7d3d25f6fe5dba13d5e4b4142949990e' },
    { text: 'DAZN LaLiga 1080 MultiAudio', url: 'acestream://110d441ddc9713a7452588770d2bc85504672f47' },
    { text: 'DAZN LaLiga 1080 MultiAudio', url: 'acestream://ec29289b0b14756e686c03a501bae1efa05be70c' },
    { text: 'DAZN LaLiga 1080 MultiAudio', url: 'acestream://6de4794cd02f88f14354b5996823413a59a1de0f' },
    { text: 'DAZN LaLiga 720', url: 'acestream://8c8c1e047a1c5ed213ba74722a5345dc55c3c0eb' },
    { text: 'DAZN LaLiga 2 1080 MultiAudio', url: 'acestream://97ba38d47680954be40e48bd8f43e17222fefecb' },
    { text: 'DAZN LaLiga 2 720 MultiAudio', url: 'acestream://51dbbfb42f8091e4ea7a2186b566a40e780953d9' },
    { text: 'LaLiga Smartbank 1080', url: 'acestream://b2706a7ffbea236a3b398139a3a606ada664c0eb' },
    { text: 'LaLiga Smartbank 720', url: 'acestream://121f719ebb94193c6086ef92865cf9b197750980' },
    { text: 'LaLiga Smartbank 2 1080', url: 'acestream://0cfdfde1b70623b8c210b0f7301be2a87456481d' },
    { text: 'LaLiga Smartbank 2 720', url: 'acestream://0a335406bad0b658aeddb2d38f8c0614b2e5623a' },
    { text: 'LaLiga Smartbank 3', url: 'acestream://fefd45ed6ff415e05f1341b7d9da2988eacd13ea' },
    { text: 'La 1 4k', url: 'acestream://4a714c436cb67d53cf197f9038239fddab2d8b20' },
    { text: 'La 1 1080p', url: 'acestream://b9a81ddb0cf98d9a5ae18ba2eef0ab094bd5d5b0' },
    { text: 'Teledeporte 1080p', url: 'acestream://61b9b271c16f970aab43cb753c5f8be181dceece' }
  ];

  const canales3Content = document.createElement('div');
  canales3Content.id = 'canales3-content';
  canales3Content.style.display = 'none';

  canales3Links.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.url;
    linkElement.textContent = link.text;
    linkElement.classList.add('link-button');
    linkElement.target = '_blank';
    canales3Content.appendChild(linkElement);
  });

  linksContainer.appendChild(canales3Content);

  // Update CANALES buttons event listeners
  document.getElementById('canales2-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const canales2Content = document.getElementById('canales2-content');
    canales2Content.style.display = canales2Content.style.display === 'none' ? 'flex' : 'none';
    canales2Content.style.flexDirection = 'column';
    
    // Hide canales1 content when showing canales2
    document.getElementById('canales-content').style.display = 'none';
    document.getElementById('canales3-content').style.display = 'none';
  });

  document.getElementById('canales1-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const canalesContent = document.getElementById('canales-content');
    canalesContent.style.display = canalesContent.style.display === 'none' ? 'flex' : 'none';
    canalesContent.style.flexDirection = 'column';
    
    // Hide canales2 content when showing canales1
    document.getElementById('canales2-content').style.display = 'none';
    document.getElementById('canales3-content').style.display = 'none';
  });

  document.getElementById('canales3-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const canales3Content = document.getElementById('canales3-content');
    canales3Content.style.display = canales3Content.style.display === 'none' ? 'flex' : 'none';
    canales3Content.style.flexDirection = 'column';
    
    // Hide other content
    document.getElementById('canales-content').style.display = 'none';
    document.getElementById('canales2-content').style.display = 'none';
  });

  // Update popup content based on button clicked
  const buttonIds = [
    'liga-btn', 'liga2-btn', 
    'champions-btn', 'f1-btn', 'motogp-btn', 'tenis-btn' 
  ];

  buttonIds.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const widgetPopup = document.getElementById('widget-popup');
      const iframe = document.getElementById('widget_iframe');
      const overlay = document.getElementById('overlay');
      
      iframe.src = iframeUrls[buttonId];
      
      // Set consistent width and height for all buttons
      iframe.width = '300';
      iframe.height = '700';
      
      widgetPopup.style.display = 'block';
      overlay.style.display = 'block';
    });
  });

  // TODO EL FUTBOL button functionality remains unchanged
  const todoButton = document.getElementById('todo-btn');
  todoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
  });

  // Close buttons functionality
  const closeButtons = ['closePopupButton', 'closeWidgetButton'];
  closeButtons.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      const popups = ['popup', 'widget-popup'];
      popups.forEach(popupId => {
        document.getElementById(popupId).style.display = 'none';
      });
      document.getElementById('overlay').style.display = 'none';
    });
  });

  // Overlay click handler
  const overlay = document.getElementById('overlay');
  overlay.addEventListener('click', () => {
    const popups = ['popup', 'widget-popup'];
    popups.forEach(popupId => {
      document.getElementById(popupId).style.display = 'none';
    });
    overlay.style.display = 'none';
  });
});