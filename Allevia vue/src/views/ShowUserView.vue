<template>
  <div class="container">
    <div class="row">
      <h2 class="mt-3">Personal information</h2>
    </div>
    <div class="row">
      <form class="row g-3">
        <div class="col-12">
          <label for="inputAddress" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Enter your Name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>

        <div class="col-12">
          <label for="inputProfession" class="form-label">Profession </label>
          <input type="text" class="form-control" id="inputProfession" />
        </div>
        <div class="col-md-6">
          <label for="inputRole" class="form-label">Role</label>
          <input type="text" class="form-control" id="inputRole" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">DOB</label>
          <input type="date" id="inputState" class="form-select" />
        </div>

        <div class="col-12">
          <button type="submit" class="btn bg-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
