<template>
    <HeaderCommon />
    <div class="admin-page">
        <aside class="sidebar">
            <nav>
                <ul class="admin-menu">
                    <li class="admin-menu-item">
                        <router-link :to="{ name: 'admin-products' }" :class="{ active: $route.name === 'products' }">
                            Products
                        </router-link>
                    </li>
                </ul>
            </nav>
        </aside>
        <div class="admin-content">
            <router-view />
        </div>
    </div>
    <FooterSecond />
</template>

<script>
import HeaderCommon from '../../Shared/controllers/HeaderCommon.vue'
import FooterSecond from '../../Shared/controllers/FooterSecond.vue'

export default {
    name: 'Admin',
    components: {
        HeaderCommon,
        FooterSecond,
    },
};
</script>

<style scoped>
.sidebar {
    width: 200px;
    border-right: 1px solid #ddd;
    padding: 20px;
}

.admin-menu {
    list-style: none;
    padding: 0;
    margin: 0;
}

.admin-menu-item {
    margin-bottom: 10px;
}

.admin-menu-item a {
    text-decoration: none;
    color: #333;
}

.admin-menu-item a.active {
    color: #fff;
    background-color: #333;
}

.admin-content {
    flex: 1;
    padding: 20px;
}
</style>

