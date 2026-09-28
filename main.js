const blob = new Blob(["This is a sample text file."], { type: 'text/plain' });

const url = URL.createObjectURL(blob);

const link = document.createElement('a');
link.href = url;
link.download = 'example.txt';

document.body.appendChild(link);

link.click();

document.body.removeChild(link);
URL.revokeObjectURL(url);
