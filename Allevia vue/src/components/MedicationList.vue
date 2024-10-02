<template>
  <div class="col">
    <div
      class="row list h-100 border-bottom border-black border-top border-black mb-2"
    >
      <div class="col-8 mt-3">
        <h6 class="fw-light">Drug</h6>
        <h6>Captopril</h6>
        <h6 class="fw-light">Dosage</h6>
        <h6>2 tablets</h6>
        <h6 class="fw-light">schedule</h6>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgba(107, 128, 80, 1)"
            class="bi bi-calendar-week mb-1"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
            />
          </svg>
          <small class="fw-light mt-2 ms-1">Mon, 21st September 2024</small>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgba(107, 128, 80, 1)"
            class="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
            />
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
            />
          </svg>
          <small class="fw-light ms-1">12:47AM</small>
        </div>
      </div>
      <div class="col-4 mt-3">
        <div class="">
          <h6 class="fw-light">Quantity</h6>
          <h6>24 tablets</h6>
        </div>
        <div class="complete mt-5">
          <button class="btn-complete rounded-2 bg-primary text-light fw-light">
            Completed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
