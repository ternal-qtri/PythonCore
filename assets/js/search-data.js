const SEARCH_INDEX = [
    // Chương 1
    { term: "venv (Virtual Environment)", chapter: "Chương 01: Môi trường & Gói", url: "chapter-01-environment.html#sec-venv", desc: "Tạo và kích hoạt môi trường ảo cô lập cho Django" },
    { term: "pip & requirements.txt", chapter: "Chương 01: Môi trường & Gói", url: "chapter-01-environment.html#sec-pip", desc: "Quản lý thư viện phụ thuộc và triển khai môi trường" },
    { term: "sys.path & PYTHONPATH", chapter: "Chương 01: Môi trường & Gói", url: "chapter-01-environment.html#sec-syspath", desc: "Cách Python và Django tìm nạp module, apps" },

    // Chương 2
    { term: "dict.get() & dict.setdefault()", chapter: "Chương 02: Cấu trúc dữ liệu", url: "chapter-02-data-structures.html#sec-dict-get", desc: "Trích xuất an toàn request.POST, request.GET" },
    { term: "List & Dict Comprehensions", chapter: "Chương 02: Cấu trúc dữ liệu", url: "chapter-02-data-structures.html#sec-comprehensions", desc: "Xử lý danh sách, QuerySet và chuyển đổi dữ liệu nhanh" },
    { term: "Tuple Unpacking & Choices", chapter: "Chương 02: Cấu trúc dữ liệu", url: "chapter-02-data-structures.html#sec-tuples", desc: "Cặp key-value trong Django Model Choices" },
    { term: "Set Operations", chapter: "Chương 02: Cấu trúc dữ liệu", url: "chapter-02-data-structures.html#sec-sets", desc: "Kiểm tra phân quyền permissions và lọc tag unique" },
    { term: "F-Strings & Path formatting", chapter: "Chương 02: Cấu trúc dữ liệu", url: "chapter-02-data-structures.html#sec-fstrings", desc: "Format URL, slug và đường dẫn file tải lên" },

    // Chương 3
    { term: "*args & **kwargs", chapter: "Chương 03: Hàm nâng cao", url: "chapter-03-functions-args-kwargs.html#sec-args-kwargs", desc: "Truyền tham số linh hoạt trong Views, Mixins và Override" },
    { term: "First-Class Functions & Closures", chapter: "Chương 03: Hàm nâng cao", url: "chapter-03-functions-args-kwargs.html#sec-closures", desc: "Hàm làm tham số, nền tảng của Decorator và Signal Handlers" },
    { term: "Function-Based Views (FBV)", chapter: "Chương 03: Hàm nâng cao", url: "chapter-03-functions-args-kwargs.html#sec-fbv", desc: "Nguyên lý hàm nhận request và trả về HttpResponse" },

    // Chương 4
    { term: "Decorator Syntax (@wrapper)", chapter: "Chương 04: Decorators", url: "chapter-04-decorators.html#sec-decorator-syntax", desc: "Cơ chế bao bọc hàm trong Python" },
    { term: "functools.wraps", chapter: "Chương 04: Decorators", url: "chapter-04-decorators.html#sec-functools-wraps", desc: "Bảo toàn metadata hàm gốc khi tạo decorator cho Django" },
    { term: "Decorator with Arguments", chapter: "Chương 04: Decorators", url: "chapter-04-decorators.html#sec-decorator-args", desc: "Tạo decorator kiểm tra quyền hạn nhận tham số" },
    { term: "@login_required & @csrf_exempt", chapter: "Chương 04: Decorators", url: "chapter-04-decorators.html#sec-django-decorators", desc: "Các decorator có sẵn phổ biến nhất trong Django" },

    // Chương 5
    { term: "Class, Instance & self", chapter: "Chương 05: OOP Nền tảng", url: "chapter-05-oop-foundations.html#sec-classes-self", desc: "Nền tảng kiến tạo đối tượng trong Django Model và View" },
    { term: "Class Inheritance (Kế thừa)", chapter: "Chương 05: OOP Nền tảng", url: "chapter-05-oop-foundations.html#sec-inheritance", desc: "Kế thừa models.Model, forms.Form và CBV" },
    { term: "super() Method", chapter: "Chương 05: OOP Nền tảng", url: "chapter-05-oop-foundations.html#sec-super", desc: "Ghi đè save(), get_context_data(), form_valid()" },
    { term: "Class Attribute vs Instance Attribute", chapter: "Chương 05: OOP Nền tảng", url: "chapter-05-oop-foundations.html#sec-class-attributes", desc: "Cách Django định nghĩa Field trên Class Model" },

    // Chương 6
    { term: "Magic Method __str__", chapter: "Chương 06: OOP Nâng cao", url: "chapter-06-oop-advanced-mixins.html#sec-dunder-str", desc: "Định dạng hiển thị tên bản ghi trên Django Admin" },
    { term: "@property & Setter", chapter: "Chương 06: OOP Nâng cao", url: "chapter-06-oop-advanced-mixins.html#sec-property", desc: "Tạo computed field ảo trên Model (ví dụ: full_name)" },
    { term: "@classmethod & @staticmethod", chapter: "Chương 06: OOP Nâng cao", url: "chapter-06-oop-advanced-mixins.html#sec-class-static-method", desc: "Custom QuerySet Managers và helper functions" },
    { term: "Multiple Inheritance & MRO", chapter: "Chương 06: OOP Nâng cao", url: "chapter-06-oop-advanced-mixins.html#sec-mro", desc: "Thứ tự phân giải phương thức trong Class-Based Views" },
    { term: "Mixins trong Django", chapter: "Chương 06: OOP Nâng cao", url: "chapter-06-oop-advanced-mixins.html#sec-mixins", desc: "Ghép nối chức năng LoginRequiredMixin, UserPassesTestMixin" },

    // Chương 7
    { term: "Module vs Package (__init__.py)", chapter: "Chương 07: Modules & Imports", url: "chapter-07-modules-packages.html#sec-packages", desc: "Cấu trúc thư mục Django project và các app độc lập" },
    { term: "Absolute vs Relative Import", chapter: "Chương 07: Modules & Imports", url: "chapter-07-modules-packages.html#sec-relative-imports", desc: "Cú pháp from .models import Post an toàn" },
    { term: "Circular Import (Import vòng)", chapter: "Chương 07: Modules & Imports", url: "chapter-07-modules-packages.html#sec-circular-import", desc: "Khắc phục lỗi đệ quy import trong ForeignKey và signals" },
    { term: "__all__ & __name__ == '__main__'", chapter: "Chương 07: Modules & Imports", url: "chapter-07-modules-packages.html#sec-dunder-main", desc: "Kiểm soát export và entrypoint manage.py" },

    // Chương 8
    { term: "try / except / else / finally", chapter: "Chương 08: Xử lý Ngoại lệ", url: "chapter-08-exceptions-logging.html#sec-try-except", desc: "Bắt lỗi luồng dữ liệu an toàn trong views" },
    { term: "Http404 & ObjectDoesNotExist", chapter: "Chương 08: Xử lý Ngoại lệ", url: "chapter-08-exceptions-logging.html#sec-django-exceptions", desc: "Xử lý khi không tìm thấy record trong database" },
    { term: "Custom Exceptions & ValidationError", chapter: "Chương 08: Xử lý Ngoại lệ", url: "chapter-08-exceptions-logging.html#sec-custom-exceptions", desc: "Bắn lỗi kiểm tra dữ liệu trong Form và Serializers" },
    { term: "Logging trong Python & Django", chapter: "Chương 08: Xử lý Ngoại lệ", url: "chapter-08-exceptions-logging.html#sec-logging", desc: "Ghi log production thay vì dùng print()" },

    // Chương 9
    { term: "Context Managers (with statement)", chapter: "Chương 09: Context Managers & Generators", url: "chapter-09-context-managers-generators.html#sec-context-managers", desc: "Tự động đóng mở file và transaction.atomic()" },
    { term: "Generators & yield", chapter: "Chương 09: Context Managers & Generators", url: "chapter-09-context-managers-generators.html#sec-generators", desc: "Xuất dữ liệu streaming CSV/Excel hàng triệu dòng mà không tràn RAM" },
    { term: "pathlib.Path (BASE_DIR)", chapter: "Chương 09: Context Managers & Generators", url: "chapter-09-context-managers-generators.html#sec-pathlib", desc: "Định nghĩa đường dẫn chuẩn trong settings.py" },

    // Chương 10
    { term: "Type Hints (typing)", chapter: "Chương 10: Modern Python", url: "chapter-10-modern-python-async.html#sec-type-hints", desc: "Khai báo kiểu dữ liệu cho Django Ninja, DRF và IDE autocomplete" },
    { term: "Dataclasses (@dataclass)", chapter: "Chương 10: Modern Python", url: "chapter-10-modern-python-async.html#sec-dataclasses", desc: "Mô hình hóa DTO và payload API không cần models.Model" },
    { term: "Async/Await cơ bản", chapter: "Chương 10: Modern Python", url: "chapter-10-modern-python-async.html#sec-async-await", desc: "Xây dựng Asynchronous Views trong Django 4/5" }
];
