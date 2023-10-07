// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        | channel[0].split('"')[1]
                        |    |   channel[0].split('"')[2]
                        |    |      |    channel[0].split('"')[3]   
                        |    |      |        |     channel[0].split('"')[4]  
                        |    |      |        |         |      channel[0].split('"')[5]          
                        |    |      |        |         |             |        channel[0].split(',')[1]    
                        __|__  |  ____|___   __|__   ____|___   _______|______    ___|__
                    |     | | |        | |     | |        | |              |  |      |
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------|-----------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split('"')[3],
                 "name": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://')                        
                }
			}
        });
}



// 
let m3u = `
#EXTM3U
#EXTINF:-1 tvg-id="1" tvg-name="OasisTV" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png",OasisTV TV * | CL
https://5e85d90130e77.streamlock.net/6020/6020/playlist.m3u8
#EXTINF:-1 tvg-id="2" tvg-name="Music Memorias" tvg-logo="https://i.imgur.com/RWC55w7.png",Music Memorias TV * | CL
https://mediacp.us:8081/8002/index.m3u8
#EXTINF:-1 tvg-id="3" tvg-name="Music" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png",Melody Channel Colombia* | CL
https://5b464b69d264e.streamlock.net/Channels_live/ngrp:MelodyChannel_all/playlist.m3u8
#EXTINF:-1 tvg-id="4" tvg-name="Más TV" tvg-logo="https://i.imgur.com/RWC55w7.png",Más  TV * | CL
https://movil.ejeserver.com/live/teledoradahd.m3u8
#EXTINF:-1 tvg-id="465" tvg-name="Retro Plus TV Señal 3" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png", Retro Plus TV Señal 3 * | CL
https://video06.logicahost.com.br/retroplussenal3/retroplussenal3/playlist.m3u8
#EXTINF:-1 tvg-id="1160" tvg-name="VClassicTV" tvg-logo="https://i2.paste.pics/99cc893c37784a17aac9a95ac3c7e5c8.png", VClassicTV * | CL
https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8
#EXTINF:-1 tvg-id="1255" tvg-name="VClassicTV Tropical" tvg-logo="https://i2.paste.pics/355ba171055dd0e6747131673432cc18.png", VClassicTV Tropical * | CL
https://5eaccbab48461.streamlock.net:1936/8222/8222/playlist.m3u8
#EXTINF:-1 tvg-id="31" tvg-name="Portal FoxMix" tvg-logo="https://i2.paste.pics/6abc319563c207c4ba1fb2c199fedd86.png", Portal FoxMix * | CL
https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8
#EXTINF:-1 tvg-id="1436" tvg-name="Apanines TV" tvg-logo="https://i2.paste.pics/eee2cbc0f52cbb9c7c73ee13f72c0b96.png", Apanines TV * | CL
https://inliveserver.com:1936/10010/10010/playlist.m3u8
#EXTINF:-1 tvg-id="1058" tvg-name="Spectrum Channel" tvg-logo="https://i2.paste.pics/e3cde58abf314e0e6b17b595c357936a.png", Spectrum Channel * | CL
https://panel.miplay.cl:8081/spectrumchannel/index.m3u8
#EXTINF:-1 tvg-id="1112" tvg-name="Fanpop TV" tvg-logo="https://i2.paste.pics/5d6d67c298360548fd41a897f987628c.png", Fanpop TV * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-2/playlist.m3u8
#EXTINF:-1 tvg-id="947" tvg-name="EnerGeek" tvg-logo="https://i2.paste.pics/5efe361b75000b6eb6104bf22a0880fe.png", EnerGeek * | CL
https://wifispeed.trapemn.tv:1936/infantil/energeek-1/playlist.m3u8
#EXTINF:-1 tvg-id="1266" tvg-name="EnerGeek Radio" tvg-logo="https://i.paste.pics/4a15cf6d76aaf3246f3a6cedd48e0ac9.png", EnerGeek Radio * | CL
https://stream.wifiexpert.cl/energeek/radio/playlist.m3u8
#EXTINF:-1 tvg-id="1300" tvg-name="Moni TV" tvg-logo="https://i2.paste.pics/dad53a17aceb11d80b7ec90ec2398f2f.png", Moni TV * | CL
https://tv.streaming-chile.com:1936/ngencrcbyy/ngencrcbyy/playlist.m3u8
#EXTINF:-1 tvg-id="1420" tvg-name="Terror TV" tvg-logo="https://i2.paste.pics/3d543690d890b9a5918a8025aebcf2bc.png", Terror TV * | CL
https://tv.streaming-chile.com:1936/8140/8140/playlist.m3u8
#EXTINF:-1 tvg-id="13" tvg-name="Ruidos TV" tvg-logo="https://i2.paste.pics/004835d0c1a19dd14fa643dd18897d4d.png", Ruidos TV * | CL
https://panel.tvstream.cl:1936/8022/8022/playlist.m3u8
#EXTINF:-1 tvg-id="1312" tvg-name="Eternal Metal" tvg-logo="https://i.paste.pics/8504c462729d61af6e1f0b59323f9a85.png", Eternal Metal * | CL
https://vdo.panelstreaming.live:3261/hybrid/play.m3u8
#EXTINF:-1 tvg-id="996" tvg-name="Latinos Radio" tvg-logo="https://i2.paste.pics/f5a6133c6b0fcec076105dfd2508549c.png", Latinos Radio * | CL
https://stmv2.zcasthn.com.br/latinosmedia/latinosmedia/playlist.m3u8
#EXTINF:-1 tvg-id="1014" tvg-name="PlanetaTV Music" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Music * | CL
https://scl.edge.grupoz.cl/music/live/music.m3u8
#EXTINF:-1 tvg-id="1016" tvg-name="PlanetaTV Movies" tvg-logo="https://i.paste.pics/37697a4fd7370ba4b48f377e79656ee2.png", PlanetaTV Movies * | CL
https://scl.edge.grupoz.cl/movie/live/movie.m3u8
#EXTINF:-1 tvg-id="144" tvg-name="Parentesis TV" tvg-logo="https://i2.paste.pics/d94a5f7f1913eea53167784065b56aee.png", Parentesis TV * | CL
https://vdo.miserver.pro:3591/live/parentesistvlive.m3u8
#EXTINF:-1 tvg-id="771" tvg-name="Mundo de la Musica TV" tvg-logo="https://i2.paste.pics/a66f18725932decfa4fcf7f634060922.png", Mundo de la Musica TV * | CL
https://tv.streaming-chile.com:1936/mundodelamusicatv/mundodelamusicatv/playlist.m3u8
#EXTINF:-1 tvg-id="1195" tvg-name="La Chilena TV" tvg-logo="https://i2.paste.pics/8c05e352159b95f3dc0092a6149b3daf.png", La Chilena TV * | CL
https://vdochile.com:3134/hybrid/play.m3u8
#EXTINF:-1 tvg-id="128" tvg-name="Sangre fria" tvg-logo="https://i2.paste.pics/3d29bee85a41e947ab505098d83e8d64.png",Sangre fria * | CL
https://stream.ads.ottera.tv/cl/231005ckfhasmptu73mos5ktbg/640x360_350000_2_f.m3u8
#EXTINF:-1 tvg-id="129" tvg-name="CineMA" tvg-logo="https://i2.paste.pics/3d29bee85a41e947ab505098d8e8d64.png",CineMA * | CL
https://stream.ads.ottera.tv/cl/231005ckfhcj8p7bqam9pip1ng/640x360_1126400_3_f.m3u8
#EXTINF:-1 tvg-id="130" tvg-name="Familia" tvg-logo="https://i2.paste.pics/3d29bee85a41e9474ab505098d83e8d64.png",Familia * | CL
https://stream.ads.ottera.tv/cl/231005ckfhe2u7d38iigqgk4q0/640x360_1126400_3_f.m3u8
#EXTINF:-1 tvg-id="131" tvg-name="Romace" tvg-logo="https://i2.paste.pics/3d29bee85a41e9474ab505098d83e8d64.png",Romace * | CL
https://stream.ads.ottera.tv/cl/231005ckfhenknsepl2jglrofg/640x360_1126400_3_f.m3u8
#EXTINF:-1 tvg-id="132" tvg-name="Corazon" tvg-logo="https://i2.paste.pics/3d29be85a41e9474ab505098d83e8d64.png",Corazon * | CL
https://stream.ads.ottera.tv/cl/231005ckfhfggkbchm32rp13dg/640x360_1126188_3_f.m3u8
#EXTINF:-1 tvg-id="133" tvg-name="Cine espanto" tvg-logo="https://i2.paste.pics/3d29bee85a41e9474ab505098d83e8d64.png",Cine espanto * | CL
https://stream.ads.ottera.tv/cl/231005ckfhg3eptu73mos5map0/640x360_1126400_3_f.m3u8
#EXTINF:-1 tvg-id="134" tvg-name="Crimen" tvg-logo="https://i2.paste.pics/3d29bee85a41e9474ab505098d83e8d64.png",Crimen * | CL
https://stream.ads.ottera.tv/cl/231005ckfhh099ffqngsqm34bg/640x360_1126400_3_f.m3u8
#EXTINF:-1 tvg-id="135" tvg-name="Comdia" tvg-logo="https://i2.paste.pics/3d29bee85a41e9474ab505098d83e8d64.png",Comdia* | CL
https://stream.ads.ottera.tv/cl/231005ckfhiiknsepl2jglstr0/640x360_1126400_3_f.m3u8
#EXTINF:-1 tvg-id="136" tvg-name="Tv amor" tvg-logo="https://i2.paste.pics/3d29bee85a41e9474ab505098d83e8d64.png",Tv amor * | CL
https://stream.ads.ottera.tv/cl/231005ckfhir5os1obfi4cfna0/640x360_350000_2_f.m3u8
#EXTINF:-1 tvg-id="137" tvg-name="Novelas Inolvidables" tvg-logo="https://i2.paste.pics/3d29bee85a41e9474ab505098d83e8d64.png",Novelas Inolvidables* | CL
https://ov.ottera.tv/channels/cnm_niv/master.m3u8
`

let parseM3u = m3utojson(m3u);