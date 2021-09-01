<template>
  <div>
    <Form v-slot="{ errors, values, validate }" @submit="onSubmit">
      {{ errors }} {{ values }}

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>

        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="user.email"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>

        <Field
          id="password"
          name="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors['password'] }"
          placeholder="請輸入密碼"
          rules="min:8|required"
          v-model="user.password"
        ></Field>
        <error-message name="password" class="invalid-feedback"></error-message>

        <Field
          id="name"
          name="地區"
          class="form-control"
          :class="{ 'is-invalid': errors['地區'] }"
          placeholder="請輸入地區"
          rules="required"
          v-model="user.region"
          as="select"
        >
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
        </Field>
        <error-message name="地區" class="invalid-feedback"></error-message>

        <Field name="飲料" type="checkbox" value="Water" rules="required"></Field> Water
        <Field name="飲料" type="checkbox" value="Tea" rules="required"></Field> Tea
        <Field name="飲料" type="checkbox" value="Coffee" rules="required"></Field> Coffee
        <error-message name="飲料" class="invalid-feedback"></error-message>

        <Field name="飲料" type="radio" value="Water" rules="required"></Field> Water
        <Field name="飲料" type="radio" value="Tea" rules="required"></Field> Tea
        <Field name="飲料" type="radio" value="Coffee" rules="required"></Field> Coffee
        <error-message name="飲料" class="invalid-feedback"></error-message>

        <!-- 自訂規則 -->
        <Field
          id="phone"
          name="phone"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['phone'] }"
          placeholder="請輸入電話號碼"
          :rules="isPhone"
          v-model="user.phone"
        ></Field>
        <error-message name="phone" class="invalid-feedback"></error-message>
      </div>

      <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>

      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
    },
    // 自行驗證電話號碼
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
  },
}
</script>
