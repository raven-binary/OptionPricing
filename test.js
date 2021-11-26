// https://www.jotform.com/blog/html5-filesystem-api-create-files-store-locally-using-javascript-webkit/

navigator.webkitPersistentStorage.requestQuota(1024 * 1024, function () {
  window.webkitRequestFileSystem(
    window.PERSISTENT,
    1024 * 1024,
    SaveDatFileBro
  );
});

function SaveDatFileBro(localstorage) {
  localstorage.root.getFile("info.txt", { create: true }, function (DatFile) {
    DatFile.createWriter(function (DatContent) {
      var blob = new Blob(["Lorem Ipsum"], { type: "text/plain" });
      DatContent.write(blob);
    });
  });
}
