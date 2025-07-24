# Kullanıcı Listesi Uygulaması (User List App)


## Demo : [Uygulama Demosu](https://user-list-app-1.netlify.app/)

Bu proje, **HTML**, **CSS**, **JavaScript** ve **jQuery** kullanarak geliştirdiğim basit bir kullanıcı listeleme uygulamasıdır. Uygulama, [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) üzerinden sahte kullanıcı verilerini çekmekte ve bu verileri kartlar şeklinde kullanıcı arayüzünde listelemektedir.

##  Kullanılan Teknolojiler

- HTML, CSS
- JavaScript 
- jQuery
- JSONPlaceholder (Fake API)

##  Özellikler

- API'den `async/await` ve `try-catch` yapısı ile kullanıcı verileri çekilmektedir.
- Çekilen veriler, **1 gün süreyle** `localStorage`’da saklanacak şekilde ayarlanmıştır.
- Her kullanıcı, ayrı bir kart olarak listelenmektedir.
- Kullanıcılar istenildiğinde tek tek silinebilir:
- Silinen kullanıcı arayüzden (UI) kaldırılır.
- Aynı zamanda `localStorage`’dan da silinir.
- Eğer **tüm kullanıcılar silinirse**:
- Ekrana bilgilendirici bir mesaj gösterilir.
- Kullanıcının verileri tekrar alabilmesi için bir **Yenile** butonu ekrana gelir.
- Veri çekme sırasında hata oluşursa, `catch` bloğu ile yakalanır ve kullanıcıya ekran üzerinde hata mesajı gösterilir.
- İlk veri çekme aşamasında, kullanıcıya yükleniyor animasyonu gösterilir.
- Arayüzde çeşitli jQuery animasyonlarına yer verilmiştir.

##  Hata Yönetimi

- API çağrıları `try-catch` blokları içinde gerçekleştirilir.
- `404` ve `500` gibi durum kodları özel olarak kontrol edilir.
- Hata oluşması durumunda, kullanıcıya ekran üzerinde bilgilendirici bir mesaj gösterilir.

## Yükleniyor Animasyonu

- Veri çekme işlemi sırasında, ekranda bir spinner (yükleniyor animasyonu) gösterilir.
- Veri geldikten sonra bu animasyon DOM'dan kaldırılır.

## Veri Saklama ve Süre Yönetimi

- Çekilen kullanıcı verileri `localStorage` içinde saklanır.
- Verinin geçerlilik süresi 1 gün olarak belirlenmiştir.
- Süresi dolan veriler silinir ve API'den tekrar veri çekilir.


---

## Uygulama Resimleri

| Kullanıcılar                | Yerel Depolama (Local Storage)      |
| --------------------------- | ----------------------------------- |
| ![Users](./images/img1.png) | ![Local Storage](./images/img2.png) |

| Seçili Kullanıcı                    | Silinen Kullanıcı                     |
| ----------------------------------- | ------------------------------------ |
| ![Selected User](./images/img3.png) | ![Deleted User  ](./images/img4.png) |

| Yenileme Butonu (Tüm Kullanıcılar Silindiğinde) | Hata Kontrolü                        |
| ----------------------------------------------- | ------------------------------------ |
| ![Refresh](./images/img5.png)                   | ![Error Message  ](./images/img6.png) |
