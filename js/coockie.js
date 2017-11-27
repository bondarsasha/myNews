var date = new Date(new Date().getTime() + 10 * 1000);
document.cookie = "show=value; path=/; expires=" + date.toUTCString();
