const app = new Vue({
    el: '#app',
    data: {
        streamers: [
            { id: 0, nombre: 'Robert', nickname: 'ItsMishi', juego: 'League of Legends', plataforma: 'Twitch', foto: 'images/faker.png', descripcion: 'Descripcion Robert' },
            { id: 1, nombre: 'Juanma', nickname: 'Killzome', juego: 'League of Legends', plataforma: 'Mixer', foto: 'images/xpeke.png', descripcion: 'Descripcion Juanma' },
            { id: 2, nombre: 'Raul', nickname: 'Masa', juego: 'CS:GO', plataforma: 'Twitch', foto: 'images/kennyS.png', descripcion: 'Descripcion Raul' },
            { id: 3, nombre: 'Fernando', nickname: 'Neptun', juego: 'CS:GO', plataforma: 'Facebook Gaming', foto: 'images/pashaBiceps.png', descripcion: 'Descripcion Fernando' },
            { id: 4, nombre: 'Manuel', nickname: 'Master', juego: 'Dota2', plataforma: 'Youtube Gaming', foto: 'images/shox.png', descripcion: 'Descripcion Manuel' },
        ],
        show: null,
        streamer: {}
    },

    methods: {
        mostrar: function(id) {


            if (this.show && this.streamers[id].id == this.streamer.id) {
                this.show = false;
            } else {
                this.show = true;
                streamer = null
            }
            this.streamer = this.streamers[id];


        }
    }

});