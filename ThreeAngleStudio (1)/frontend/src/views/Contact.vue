<template>
  <div class="contact">
    <section class="contact-form">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="contactMethod">Preferred Contact Method:</label>
          <select id="contactMethod" v-model="formData.contactMethod" required>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        <div class="form-group" v-if="formData.contactMethod === 'email'">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" />
        </div>
        <div class="form-group" v-if="formData.contactMethod === 'phone'">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="formData.phone" />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formData: {
        name: "",
        contactMethod: "email",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form data submitted:", this.formData);
      alert("Your message has been sent!");
      this.formData = {
        name: "",
        contactMethod: "email",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>

<style>
.contact-form {
  text-align: center;
  background-color: #fffaf1;
  padding: 3rem 1rem;
}

.contact-form h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #a19689;
  border-radius: 5px;
}

button {
  background-color: #a19689;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #1a1a1a;
}
</style>
