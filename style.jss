body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f0f4f9;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: #fff;
  width: 90%;
  max-width: 1000px;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background: #1e40af;
  color: #fff;
  padding: 15px;
  text-align: center;
  font-size: 18px;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
}

.form-section, .preview-section {
  flex: 1;
  min-width: 300px;
}

.form-section label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
}

.form-section input, .form-section textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

.form-section textarea {
  resize: vertical;
}

.form-section button {
  background: #1e40af;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
}

.form-section button:hover {
  background: #2563eb;
}

.preview-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: #f9fafb;
  text-align: center;
}

.preview-section h3 {
  margin-top: 0;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
}

.preview-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
  margin-bottom: 10px;
}

.error {
  color: red;
  font-size: 13px;
  margin-top: -10px;
  margin-bottom: 10px;
  display: none;
}
