<template>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style >
.navbar {
    box-shadow: 0 0.125rem 0.25rem #a5a3ae4d;
    background-color: #fffffff2 !important;
    color: #6f6b7d;
    border-radius: 0.375rem;
    position: sticky;
    top: 1rem;
    z-index: 1;
}
</style>