# Crud App

Create Read Update Delete
Oluştur Oku Düzenle Sil

- 1 Form içerisinde gelen verileri al ve state'e aktar.
- - Ekle butonuna tıklanılınca formdan gelen kitap ismiyle beraber yeni bir obje oluşturulucak
- - Değerleri: Eklenme Tarihi | Kitap İsmi | id | okunduMu
- - Oluşan objeyi kitaplar isminde bnir diziyi tutan state'e aktar
- - Son aşamada inputu temizle

- 2 books Stateinde tutulan kitapları al ve map methodu ile listele(ekrana bas)
- - eğer state boşsa ekrana "henüz kitap eklenmedi" yaz
- - BookCard bileşenine kitap bilgilerini prop olrak gönder
- - BookCard bileşenin kitapla iligli bütün özellikleri göster

- 3 Kitap Silme:
- - herhangi bir kitabın sil butonun basıldığında
- - fonk. çalıştır ve silincek elemanın id'sini gönder `handleModal(id)`
- - bir onay modal'ı aç:
- - vacgeçe tıklanırsa kapat `setShowModal(false)`
- - onaylanırsa silincek id'ye eşit olmaynlarla yeni bir dizi oluştur
- - oluşan yeni diziye state'e aktar `handleDelete()`

- 4 Okundu olarak işaretle:
- - okundu butonuna tılanılınca çalışan fonk. kitab değerlerini gönder
- - kitab isRead değerini tersine çevir
- - dizi içerinde değişicek elemanı bul
- - değişecek elemanı çıkar yerine güncel halini ekle
- - state'i güncelle

- 5 Düzenle İşlemini Yap:
- - Düzenle butonuan tıklanıdlığında bir fonk. çalışsın
- - Fonk. düzenlenecek kitabı state'e aktarsın ve modal'ı açsın
- - Modalda: Kitap ismini değiştirmek için bir input olsun (value'su kitabın ismi olucak)
- - Input her değiştiğinde düznlenicek elemanı tutuğun state'i güncelle
- - Vazgeç butonu: > Modal'ı kapatır
- - Kaydet Butonu: > `handleEditBook` fonk. çalıştırsın
- - çalışan fonk. kitaplar dizisni güncellesin (eski elemanı çıkarıp güncel halini koysun)
- - gğncellerken isim ve date'i değiştir

- - Note Uygulaması
- Bütün kodlar app.js'de yazılsın

- Form Oluşturun
- - inputun içeresine yazılan değer state'de tutulmalı `text`
- - useState yardımyla bütün notlar bir dizi halinde tutulmalı `notes[]`
- - Ekle butonuna tıklanılınca ekleme fonk. çalışsın
- - Fonksiyon: text state 'inde tuttuğunuz değeri diğer notların yanında göndersin
- - `text` değeri boş ise ekleme fonksiyonu çalışmasın ve alert versin
- - inputu temizleyin (value unutulmasın)

- Note'ların Listeleneceği bir `ul ` oluşturun
- - `notes` dizisindeki her bir eleman içerini `li` basın ve note'un değerini girin (map)
# CRUD_App
