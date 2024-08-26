<template>
    <footer class="bg-dark py-5 mt-5" id="footer">
    <div class="container text-light text-center">
        <div class="d-flex justify-content-around" id="foot">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a href="#top" class="btn btn-primary back-to-top bg-dark btn-custom-border">Return to the Top</a>
                </li>
            </ul>
        </div>
        <p class="display-5 mb-3"></p>
        <small class="text-white-50">&copy; 2024 Edoardo Germenà. All rights reserved.</small>
    </div>

</footer>
</template>

<style scoped>
header, footer {
    width: 100%;
    background-color: #f4f4f4;
    padding: 10px 0;
    text-align: center;
}
.btn-custom-border {
    border-color: var(--app-color-accent) !important;
}
</style>