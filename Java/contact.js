  document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };

      // Option 1: Send to iFrame (if embedded)
      const iframe = window.parent; // assumes form is inside an iframe
      if (iframe && iframe.postMessage) {
        iframe.postMessage(formData, '*');
      }

      // Option 2: Send via mailto (opens email client)
      const mailtoLink = `mailto:your@email.com?subject=Contact Form&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      // Redirect back to same page
      window.location.href = window.location.pathname;
    });


    function goBack() {
      window.history.back();
    }

