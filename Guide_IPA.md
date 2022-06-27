# API-9: Danh sách từ vựng đã học

```
URL: v3.0/words/page
METHOD: GET
```

> Api để lấy danh sách những từ đã học
***

### HEADER

| no |Param         | Description                                                       |
|---|---------------|------------------------------------------------------------------ |
| 1 |PrivateKey     |                                                                   |
| 2 |DeviceType     | 1: ios, 2: android, 3: extension, 4: web                          |
| 3 |AppVersion     | version hiện tại của app                                          |

### BODY

| no |Param               |Type       |Validate                                        |
|----|--------------------|-----------| ---------------------------------------------- |
| 1  |user_token          |String     |required                                        |
| 2  |offset              |Int        |required                                        |
| 3  |page_level_1        |Int        |                                                |
| 4  |page_level_2        |Int        |                                                |
| 5  |page_level_3        |Int        |                                                |
| 6  |page_level_4        |Int        |                                                |
| 7  |page_level_5        |Int        |                                                |

> 1. user_token: user_token của user được lấy từ api login
> 2. offset: Số lượng từ hiển thị lấy về trong 1 lần

### Examples

````
{
    "user_token": "xxxxxxxxxxxxxx",
    "offset": 20,
    "page_level_1": 1,
    "page_level_2": 1,
    "page_level_3": 1,
    "page_level_4": 1,
    "page_level_5": 1,
}
````

### RESPONSES

### Errors

1. Validation Error

````
{
    "code": 0,
    "msg": "Thực hiện không thành công",
    "errors": {
        "offset": ["xxx"]
    }
}
````

2. Lỗi ngoại lệ

````
{
   "code": "0",
   "msg": "user chưa đăng nhập"
}
````

### Success
   
````
{
    "code": 1,
    "data": {
        "1": [
            {
                "id": 791,
                "code": "TACB8010",
                "audio": "https://mochien-test.akira.edu.vn/public/audios/question/hamster.mp3",
                "picture": "https://mochien-test.akira.edu.vn/public/images/question/hamster.png",
                "status": null,
                "content": "Hamster",
                "trans": "Chuột hams",
                "phonetic": "/ˈhæmstər/",
                "hint": null,
                "correct": null,
                "kanji": null,
                "hiragana": null,
                "sentence_en": "Young people like keeping hamster as a pet in their houses.",
                "sentence_vi": "Thanh niên thích nuôi chuột như thú cưng trong nhà.",
                "correct_extend": null,
                "en_trans": null,
                "en_hint": "Young people like keeping hamster as a pet in their houses.",
                "vi_hint": "Thanh niên thích nuôi chuột hams như thú cưng trong nhà.",
                "multi_answer": null,
                "created_at": "2020-05-12 14:38:30",
                "updated_at": "2021-02-24 16:57:48",
                "ko_trans": "햄스터",
                "th_trans": "หนูแฮมสเตอร์",
                "ja_trans": "ハムスター",
                "ko_hint": "그들의 집에서 애완 동물로 햄스터를 유지 같은 젊은 사람.",
                "th_hint": "คนหนุ่มสาวเช่นการรักษาหนูแฮมสเตอร์เป็นสัตว์เลี้ยงในบ้านของพวกเขา",
                "ja_hint": null,
                "wm_id": 26421,
                "review": 1,
                "position": "n",
                "review_status": 1
            }
        ]
    },
    "total": 272,
    "page_level": {
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1
    }
}
````
=========================================================================


# API-39: Search từ điển

```
URL: v3.1/words/dictionary-english?key={key}&user_token={user_token}
METHOD: GET
```

> Api Search từ điển

***
## 24/01/2022
- Thêm giá trị user_token vào param tìm kiếm.
- Nếu user chưa login thì không cần gửi
## 03/11/2021
- Thêm giá trị suggests vào response trả về khi tìm kiếm những từ không có trong hệ thống.
***

### HEADER

| no |Param         | Description                                                       |
|---|---------------|------------------------------------------------------------------ |
| 1 |PrivateKey     |                                                                   |
| 2 |DeviceType     | 1: ios, 2: android, 3: extension, 4: web                          |
| 3 |AppVersion     | version hiện tại của app                                          |

### BODY


### Examples

````

````

### RESPONSES

### Errors
1. Validation Error

````

````

2. Lỗi ngoại lệ

````
{
   "code": "0",
   "msg": "Không thành công"
}
````

### Success

````
{
    "code": 1,
    "data": {
        "us": [
            {
                "content": "about",
                "position": "adjective",
                "phonetic_uk": "/əˈbaʊt/",
                "phonetic_us": "/əˈbaʊt/",
                "detail": [
                    {
                        "trans": "to be close to doing something; to be going to do something very soon",
                        "en_sentence": "I was just about to ask you the same thing.<br />\n"
                    }
                ]
            }
        ],
        "vi": [
            {
                "content": "about",
                "phonetic_uk": "/əˈbaʊt/",
                "phonetic_us": "/əˈbaʊt/",
                "audio_us": null,
                "audio_uk": null,
                "trans": "trong khoảng",
                "ko_trans": "약",
                "ja_trans": "約",
                "th_trans": "เกี่ยวกับ",
                "position": null,
                "detail": [
                    {
                        "id": 6672,
                        "content": "about",
                        "phonetic": "/əˈbaʊt/",
                        "trans": "(+ to V) Sắp, chuẩn bị làm gì",
                        "review": 1,
                        "en_sentence": "He's about to leave.",
                        "vi_sentence": "Anh ấy chuẩn bị rời đi.",
                        "picture": null,
                        "audio": null,
                        "position": "adjective"
                    }
                ]
            }
        ],
        suggests: [
            "xxxx",
            "xxxx"
        ]
    },
    "msg": "Thực hiện thành công"
}
````

````
review = 0: từ không được lưu vào sổ tay
review = 1: từ được nạp vào sổ tay
review = 2: từ đã được lưu vào sổ tay
````

================================================================================



# API-25: Cập nhật trạng thái từ đã học

```
URL: v3.0/words/update-learn-status
METHOD: POST
```

> Api Cập nhật trạng thái từ đã học

### HEADER

| no |Param         | Description                                                       |
|---|---------------|------------------------------------------------------------------ |
| 1 |PrivateKey     |                                                                   |
| 2 |DeviceType     | 1: ios, 2: android, 3: extension, 4: web                          |
| 3 |AppVersion     | version hiện tại của app                                          |

### BODY

| no |Param               |Type       |Validate                                        |
|----|--------------------|-----------| ---------------------------------------------- |
| 1  |user_token          |String     | required                                       |
| 2  |words               |String     | required                                       |

> 1. user_token: giá trị user_token của user có được sau khi login, nếu user chưa login thì giá trị để null
> 2. words: dữ liệu cập nhật

### Examples

````
{
    "user_token": "xxxxx",
    "words": {"words":[{"word_id":77,"review_status":1},{"word_id":88,"review_status":0}]}
}
````
> review_status: 1 - Ôn tập, 2 - không ôn tập nữa

### RESPONSES

### Errors

1. Validation Error

````
{
    "code": 0,
    "msg": "Thực hiện không thành công",
    "errors": {
        "words": ["xxx"]
    }
}
````

1. Lỗi ngoại lệ

````
{
   "code": "0",
   "msg": "Không thành công"
}
````

### Success

````
{
    "code": 1,
    "msg": "Cập nhật thành công"
}
````

========================================================================
user_token:
 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0


 new token:
 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.
 eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiIxMjMuMjUuMjUuMjQ4In0.
 aQOJ7t8an6XIRgkWHe31MvhE5-Jqwc-K2DXK1Q_CMz4