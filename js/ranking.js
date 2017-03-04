var titles = [
  '.hack//G.U. - Yasashii ryoute (Gentle Hands)',
  '.hack//SIGN - Fake Wings',
  'Angel Beats - My Soul, Your Beats!',
  'Attack on Titan ED - Utsukushiki zankoku na sekai',
  'Attack on Titan OP - Guren no Yumiya',
  'Ayashi no Ceres - Scarlet',
  'Bakemonogatari ED - Kimi no shiranai monogatari',
  'Code Geass - Innocent Days',
  'Cosmo Warrior Zero ED - The Book of Life',
  'Cowboy Bebop - ELM',
  'Durarara!! OP - Uragiri no yuuyake',
  'Elfen Lied OP - Lilium',
  'ERASED OP - Re:Re:',
  'Escaflowne - Sora',
  'Escaflowne OP - Yakusoku wa iranai',
  'Evangelion OP - Zankoku na Tenshi no THESE',
  'FMA - Bratja',
  'FMA: Brotherhood - Again',
  'Fate/stay night OP - Disillusion',
  'Fruits Basket OP - For Fruits Basket',
  'Haruhi Suzumiya OP - Bouken Desho Desho?',
  'Le Château ambulant - Sekai no yakusoku',
  'Le Château dans le ciel - Kimi wo nosete',
  'Le Voyage de Chihiro - Itsumo nando demo',
  'Loveless ED - Michiyuki',
  'Madlax OP - Hitomi no Kakera',
  'Madoka Magica - Sis Puella Magica!',
  'Mushishi OP - The Sore Feet Song',
  'Naruto ED - Wind',
  'No Game No Life OP - This Game',
  'Noir OP - Kopperia no hitsugi',
  'Noir - Canta per me',
  'Perfect Blue - Cherish These Memories',
  'Princesse Mononoké - Mononoke-hime',
  'Ragnarok Online 2 - Yoru',
  'RahXephon - Hemisphere',
  'Record of Lodoss War OP - Adesso e fortuna',
  'Re:Zero OP - Redo',
  'Re:Zero OP - Paradisus-Paradoxum',
  'Shinsekai yori ED - Wareta Ringo',
  'Steins;Gate - Hacking to the Gate',
  'Terror in Resonance - is',
  'Terror in Resonance ED - Dare ka, Umi wo',
  'Tokyo Ghoul - Glassy Sky',
  'Utawarerumono OP - Musouka',
  'Wolf\'s Rain ED - Gravity',
  'Your Lie in April OP - Hikaru Nara',
];

for(i = 0; i < titles.length; i++) {
  var nbVotes = document.createElement('span');
  nbVotes.appendChild(document.createTextNode(0));
  nbVotes.setAttribute('class', 'score');
  nbVotes.setAttribute('id', 'v' + i);
  var link = document.createElement('a');
  link.setAttribute('href', 'javascript:vote(' + i + ')')
  link.appendChild(document.createTextNode(titles[i]));
  var contestant = document.createElement('li');
  contestant.setAttribute('class', 'grid-item');
  contestant.appendChild(link);
  contestant.appendChild(nbVotes);
  document.getElementById('grid').appendChild(contestant);
}

var iso;

function initRanking() {
  grid = document.querySelector('#grid');
  iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'vertical',
    getSortData: {
      score: '.score parseInt'
    },
  });
}

function rerank() {
  iso.updateSortData();
  iso.arrange({
    sortBy: 'score',
    sortAscending: false
  });
};

function vote(animeID) {
  doSend(animeID);
}
