const app = Vue.createApp({
    data() {
        return {
            titulo: 'Hola mundo con Vue.js',
            cantidad: 100,
            cuentaBancaria: {
                saldo: 500,
                enlace: 'https://youtube.com'
            },
            linkWeb: 'https://youtube.com',
            estado: false,
            servicios: ['trasferencias', 'giros', 'pagos'],
            reducirDesactivado: false
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad+= 100;
            this.checkSaldo();
        },
        reducirSaldo(){
            if (this.cantidad === 0){
                alert('saldo en 0');
                return
            }
            this.cantidad-=100;
            this.checkSaldo();
        },
        checkSaldo(){
            this.reducirDesactivado = this.cantidad === 0; 
        }
    },
    computed: {
        colorCantidad () {
            return this.cantidad > 500 ? 'text-success' : 'text-danger' ;
        },
        textoMayuscula() {
            return this.titulo.toUpperCase();
        }
    }
})