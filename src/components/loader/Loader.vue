<template>
    <div class="loader">
      <div class="loader-spinner"></div>
    </div>
  </template>
  
  <style>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .loader-spinner {
    border: 4px solid #f3f3f3; /* Light gray */
    border-top: 4px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  