function generateBarcode(){
    let barcodeValue = document.getElementById('barcode-value').value
    JsBarcode('#barcode',barcodeValue,{
           background:"#9bb8d1",
           linecolor:'#ffffff'
    })
}