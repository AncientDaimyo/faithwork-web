<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>article</th>
        <th>image</th>
        <th>cost</th>
        <th>description</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products">
        <td>{{ product.uuid }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.article }}</td>
        <td><img :src="product.image" style="width: 5rem" /></td>
        <td>{{ product.cost }}</td>
        <td>{{ product.description }}</td>
        <td>
          <button @click="updateProduct(product)">update</button>
          <button @click="deleteProduct(product.uuid)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <form @submit.prevent="createProduct">
    <input type="text" v-model="newProduct.name" placeholder="name" />
    <input type="text" v-model="newProduct.article" placeholder="article" />
    <input type="text" v-model="newProduct.image" placeholder="image" />
    <input type="number" v-model="newProduct.cost" placeholder="cost" />
    <input
      type="text"
      v-model="newProduct.description"
      placeholder="description"
    />
    <button type="submit">create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      newProduct: {
        name: "",
        article: "",
        image: "",
        cost: 0,
        description: "",
      },
    };
  },
  methods: {
    async getProducts() {
      try {
        const response = await fetch("http://localhost:8000/api/admin/product");
        const data = await response.json();
        this.product    s = data;
      } catch (error) {
        console.error(error);
      }
    },
    async createProduct() {
      try {
        const response = await fetch("http://localhost:3000/api/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.newProduct),
        });
        const data = await response.json();
        this.products.push(data);
        this.newProduct = {
          name: "",
          article: "",
          image: "",
          cost: 0,
          description: "",
        };
      } catch (error) {
        console.error(error);
      }
    },
    async updateProduct(product) {
      try {
        const response = await fetch(`http://localhost:3000/api/product`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        const data = await response.json();
        const index = this.products.findIndex(
          (item) => item.uuid === data.uuid
        );
        if (index !== -1) {
          this.products.splice(index, 1, data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        const response = await fetch(`http://localhost:3000/api/product`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uuid: id }),
        });
        if (response.ok) {
          const index = this.products.findIndex((item) => item.uuid === id);
          if (index !== -1) {
            this.products.splice(index, 1);
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

