document.addEventListener('DOMContentLoaded', () => {
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
    const copySuccess = document.getElementById('copy-success');
  
    const copyTextHandler = () => {
      const text = codeBlock.innerText;
      navigator.clipboard.writeText(text).then(
        () => {
          copyButton.innerHTML = "Copied!";
          setTimeout(() => {
            copyButton.innerHTML = "Copy";
          }, 1000);

        },
        () => {
          console.log('Error writing to the clipboard');
        }
      );
    };
  
    copyButton.addEventListener('click', copyTextHandler);
  });