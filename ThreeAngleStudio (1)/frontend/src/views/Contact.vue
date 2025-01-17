<template>
  <section id="contact" class="contact">
    <h1>Contact Us</h1>
    <p>We would love to hear from you! Please fill out the form below.</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="contactMethod">Preferred Contact Method</label>
        <select id="contactMethod" v-model="formData.contactMethod" @change="updateContactField">
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
      <div v-if="formData.contactMethod === 'email'" class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div v-if="formData.contactMethod === 'phone'" class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" v-model="formData.phone" placeholder="+1 (555) 000-0000" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
      </div>
      <div class="form-group">
        <label for="file">Attach Inspiration Photos</label>
        <input type="file" id="file" @change="handleFileUpload" multiple />
      </div>
      <button type="submit">Send</button>
    </form>
  </section>
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
        files: [],
      },
    };
  },
  methods: {
    updateContactField() {
      if (this.formData.contactMethod === "email") {
        this.formData.phone = "";
      } else {
        this.formData.email = "";
      }
    },
    handleFileUpload(event) {
      this.formData.files = Array.from(event.target.files);
    },
    submitForm() {
      alert("Form submitted! Thank you for contacting us.");
      console.log(this.formData);
    },
  },
};
</script>

<style>
.contact {
  padding: 2rem;
  text-align: center;
}
.contact h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.contact p {
  margin-bottom: 2rem;
}
form {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea,
select,
button {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid #a19689;
  border-radius: 5px;
}
button {
  background-color: #a19689;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #1a1a1a;
}
</style>
