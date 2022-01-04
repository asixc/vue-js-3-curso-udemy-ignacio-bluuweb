app.component('footer-custom', {
    props: ['valor', 'fecha'],
    template: ` 
    <div class="container-fluid">
        
        <footer class="row bg-dark py-3 mt-2 text-white">
            <h4>{{ title }} - Cantidad: {{ cantidad }} - Cantidad por props: {{ valor }}</h4>
            <h3>{{ fecha }} </h3>
        </footer>
    </div>
    `,
    data() {
        return {
            title: 'Footer de mi sitio web',
            cantidad: 2300
        }
    },
    
    
})