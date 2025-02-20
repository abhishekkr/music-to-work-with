  // Music JS
  var prev_ids_list = ["", ""];
  var ytiframe = document.getElementById('ytplayer');
  const yt_url_begin = "https://www.youtube.com/embed/";
  // const yt_url_end = "?autoplay=1&origin=https://lude.page&mute=0&enablejsapi=1";
  const yt_url_end = "?autoplay=1&muted=0&t=0";
  const song_ids_list = [
    "pC55KBJWiHY", // VINTAGE - Deep House French Music 50s & 80s Hits - By Genvis
    "qKlUpmZwsyw", // Feeling Good Mix - Emma Péters, Carla Morrison
    "nec3aZM8aUY", // Deep House Mix 2024 Chillout Mix by Diamond #3
    "kLjJX-7BG-s", // Classic 2000s RnB Playlist ~Best R&B/Soul 2000-2009
    "L5xjLvc5LRE", // Back Hits of 1950s - 2000s lofi remix / Joe Ashley
    "r55w6BEjIyI", // Smooth Jazz House Mix
    "jvXUJYmpIy8", // French Deep House Mix; Emma Peters, Edmofo, Crisologo, Vianney
    "I7tPFF2TmeI", // Omer Balik Mix Best of 2021
    "L_kSR6tfuP8", // badass song ONLAP that
    "sCNlt5nvSI8", // FKJ live at Salar de Uyuni, Bolivia for Cercle
    "4nvewes8Inc", // Groovy Disco and R&B at NY Basement Party, Tinzo, Book Club Radio
    "vBCNlxFTkJk", // Berlin Deep House, Chris Luno
    "D6-7gZFPvV0", // Depeche Mode - Pink Floyd, Moby, Rufus Du Sol, Solomun, AMNESIA
    "G5Jmy6-gaSc", // Giolì & Assia - #DiesisLive @Punta Bianca, Agrigento
    "-0a5-J2somM", // Crossroads To Chicago Blues, McCall Brothers Band
    "mvBqYbs_Xmc", // Best of Jim Croce Vol#1
    "9hxGMPYboLo", // Fisher Mix 2023 Tech House
    "NdvpzFWrjw0", // Lucifer Morningstar Playlist
    "ES5lFNvbFBs", // Jamiroquai DJ Mix by JaBig, Acid Jazz
    "lEEjl26Fxic", // Best of Still Corners
    "jSQKxyUumfs", // Playlist Still Corners
    "4YjlvuYc9FI", // Two Feet - Digital Mirage
    "4Odt6HbgeNo", // Legendary Melodies Best Instrumental Music #1
    "srBUB4XEjoo", // Sheldon King's Ambient Acoustic Guitar
    "IK7AYIXt4ro", // Forester - Moonlight (Live Performance)
    "ApHL4mVUln0", // NY Jazz Saxophone
    "uTSl_UpJy4k", // dark academia playlist harmony with rain
    "iMqe_O1bGTQ", // Classical Music for Commodores
    "lT-SegK_ybg", // Old Money Playlist
    "tlHVd6NTLE0", // 1hr dark techno another distraction cybermode
    "14AI3obH8XA", // some old lofi tape 1hr
    "K-rrsOba3gE", // You have no enemies
    "jidqrehoZgI", // Gia Fu, Salsa Records from Curacao
    "vDKTkYz_cy4", // playlist jpop tokyo pub on rainy night
    "I7I7MY_8OBQ", // Kurumi's Phonk night drive
    "xHZ39eRNvBg", // [hybs playlist] sit here and you listen to hybs songs
    "pRbxlpvXw2s", // Playlist of songs that'll make you dance ~ Feeling good playlist
    "Snhb-97lMcQ", // Caravan Palace - Gangbusters Melody Club (Full Album)
    "Q-0KUYcPFd4", // It's a groovy synth-pop at Hakata Station on a rainy day
    "cnlw7tg-o2U", // groovy playlist that's good to secretly dance to while working
    "aaWQwEQ1mdQ", // PHONK MUSIC 2024 , BEST GYM MUSIC
    "82ujdQBjpDQ", // Quiet Solitude Lofi hip hop mix / Smoke & Chill
    "f1-jV9Qwwf0", // cunjur - running distance | dreamcore playlist
    "lPXi-5XhDPE", // Nephilist - running away | dreamcore playlist
    "cfkoy-OLmCI", // Technic - comfort playlist
    "yK2SIzlRWmM", // Jimmy - comfort playlist
    "HkAi3wf3A6g", // Tsuri - love playlist
    "ak5X7vTpqDQ", // Quiet Hours - Coffee & Cigarettes
    "AKbelTywKhs", // cigarettes after sex playlist
    "XhRtmk7vm3k", // cheonsa - late night vibe
    "ot8SV-1B5n8", // @fall-in-love-hehe - pov, all songs about you
    "NTgouy-3vqA", // @FearlessMix - anti hero
    "QcFXdi6mblg", // @Veelittlebee - tragic badass
    "AHdLwEUkhUA", // @emileedawnfrench - anti hero
    "AIs221cgL5c", // @yejestersprivilege - cowboy
    "jV80Kw3Lvnk", // @redrum-o9q : you realize an anti hero is also here
    "Gb4ffW3Nq5Q",
    "Q1g8-9u9xDc",
    "GrG2-oX5z24",
    "XOXIZ5jbw0k",
    "WwOcAdyZfgY",
    "fic_SPhoFok",
    "fKkAboLtpXI",
    "XIfTLLK1rnc",
    "qClVMXMxfgM",
    "wB8AArJG6BE",
    "4LPwMLLXoMc",
    "lzF1gskuGFc",
    "pa1-t45nK1o",
    "jL-u3kAywRk",
    "TuPZq8zaCo8",
    "F2lk3I2w2Uk",
    "M9z3ucb6f7c",
    "D9ZXhB0C9QE",
    "eEElQpZ_VKQ",
    "78kT9a6Stw8",
    "889gjqDj3Vs",
    "F9Ex1ESEWN4",
    "AlusJU53nKg",
  ];

  const yt_id_from_url = function() {
    var hash_ytid = document.location.hash.replace(/^#/, '');
    if (hash_ytid != '') {
      document.location.hash = '';
      if (song_ids_list.includes(hash_ytid)) {
        return hash_ytid;
      }
    }
    return '';
  }

  const random_id = function() {
      var song_id = yt_id_from_url();
      if (song_id != '') {
        return song_id;
      }
      const mn = 0;
      const mx = song_ids_list.length - 1;
      var index = Math.random() * mx + mn;
      index = index < 0.5 ? 0 : Math.ceil(index);
      index = index > mx ? mx : index;
      song_id = song_ids_list[index];
      //console.log("Previous IDs:", prev_ids_list); //DEBUG
      //console.log("Index:", song_id); //DEBUG
      //console.log("New Previous IDs:", prev_ids_list); //DEBUG
      while (prev_ids_list.includes(song_id)){
        if (song_ids_list.length < 3) {
          break;
        }
        song_id = random_id();
      };
      return song_id;
  }

  const reset_song = function(){
    var ytid = random_id();
    prev_ids_list.shift();
    prev_ids_list.push(ytid);
    var yturl = yt_url_begin + ytid + yt_url_end;
    //console.log("YT URL:", yturl); //DEBUG
    ytiframe.src = yturl;
    var self_lnk_end = document.location.href.indexOf('#') > 0 ? ytid : '#' + ytid;
    document.getElementById('yturl').href = document.location.href + self_lnk_end;
  };

  reset_song();
