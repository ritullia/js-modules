export default function appHeader(app) {
    app = document.createElement('header');
    app.innerHTML = 'Cia header';
    document.querySelector('body').append(app)

}