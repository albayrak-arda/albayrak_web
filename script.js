(() => {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const drop = document.querySelector("[data-nav-drop]");
  const floatBar = document.querySelector("[data-float-bar]");
  const floatWa = document.querySelector("[data-float-wa]");

  const setSolid = () => {
    if (!header) return;
    const open = header.classList.contains("is-open");
    header.classList.toggle("is-solid", window.scrollY > 24 || open);
  };

  const setFloat = () => {
    const visible = window.scrollY > 520;
    floatBar?.classList.toggle("is-visible", visible);
    floatWa?.classList.toggle("is-visible", visible);
  };

  setSolid();
  setFloat();
  window.addEventListener("scroll", () => {
    setSolid();
    setFloat();
  }, { passive: true });

  menuToggle?.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
    document.body.classList.toggle("is-locked", open);
    setSolid();
  });

  document.querySelectorAll("[data-close-menu]").forEach((el) => {
    el.addEventListener("click", () => {
      header?.classList.remove("is-open");
      document.body.classList.remove("is-locked");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "Menüyü aç");
      setSolid();
    });
  });

  if (drop) {
    const btn = drop.querySelector("button");
    const openDrop = (open) => {
      drop.classList.toggle("is-open", open);
      btn?.setAttribute("aria-expanded", String(open));
    };
    btn?.addEventListener("click", () => openDrop(!drop.classList.contains("is-open")));
    drop.addEventListener("mouseenter", () => openDrop(true));
    drop.addEventListener("mouseleave", () => openDrop(false));
    drop.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => openDrop(false));
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    drop?.classList.remove("is-open");
    header?.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    menuToggle?.setAttribute("aria-expanded", "false");
    setSolid();
  });

  document.querySelectorAll("[data-faq]").forEach((list) => {
    list.querySelectorAll(".faq-item").forEach((item) => {
      const trigger = item.querySelector(".faq-trigger");
      const panel = item.querySelector(".faq-panel");
      trigger?.addEventListener("click", () => {
        const open = !item.classList.contains("is-open");
        list.querySelectorAll(".faq-item.is-open").forEach((other) => {
          if (other !== item) {
            other.classList.remove("is-open");
            other.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
          }
        });
        item.classList.toggle("is-open", open);
        trigger.setAttribute("aria-expanded", String(open));
        if (panel) panel.hidden = !open;
      });
    });
  });

  const browser = document.querySelector("[data-article-browser]");
  if (browser) {
    const cards = [...browser.querySelectorAll("[data-article-card]")];
    const count = browser.querySelector("[data-article-count]");
    const empty = browser.querySelector("[data-article-empty]");
    const grid = browser.querySelector("[data-article-grid]");
    const search = browser.querySelector("[data-article-search]");
    const chips = [...browser.querySelectorAll("[data-category]")];
    let category = "Tümü";

    const apply = () => {
      const needle = (search?.value || "").trim().toLocaleLowerCase("tr");
      let visible = 0;
      cards.forEach((card) => {
        const hay = `${card.dataset.title} ${card.dataset.excerpt} ${card.dataset.category}`.toLocaleLowerCase("tr");
        const matchesCategory = category === "Tümü" || card.dataset.category === category;
        const matchesQuery = needle.length === 0 || hay.includes(needle);
        const show = matchesCategory && matchesQuery;
        card.classList.toggle("hidden", !show);
        if (show) visible += 1;
      });
      if (count) {
        count.textContent = `${visible} makale listeleniyor${category !== "Tümü" ? ` · ${category}` : ""}`;
      }
      empty?.classList.toggle("hidden", visible !== 0);
      grid?.classList.toggle("hidden", visible === 0);
    };

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        category = chip.dataset.category || "Tümü";
        chips.forEach((c) => {
          const active = c === chip;
          c.classList.toggle("is-active", active);
          c.setAttribute("aria-pressed", String(active));
        });
        apply();
      });
    });

    search?.addEventListener("input", apply);
    browser.querySelector("[data-clear-filters]")?.addEventListener("click", () => {
      category = "Tümü";
      if (search) search.value = "";
      chips.forEach((c) => {
        const active = c.dataset.category === "Tümü";
        c.classList.toggle("is-active", active);
        c.setAttribute("aria-pressed", String(active));
      });
      apply();
    });
    apply();
  }

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9+()\s.-]{10,20}$/;
    const success = document.querySelector("[data-form-success]");
    const alertBox = form.querySelector("[data-form-alert]");
    const submitBtn = form.querySelector("[type='submit']");
    const params = new URLSearchParams(window.location.search);
    const konu = params.get("konu");
    if (konu) {
      const area = form.querySelector("[name='area']");
      if (area && [...area.options].some((opt) => opt.value === konu)) {
        area.value = konu;
      }
    }

    const setError = (name, message) => {
      const field = form.querySelector(`[name='${name}']`);
      const err = form.querySelector(`[data-error='${name}']`);
      field?.classList.toggle("is-invalid", Boolean(message));
      if (err) err.textContent = message || "";
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const values = Object.fromEntries(data.entries());
      const errors = {};

      if (String(values.name || "").trim().length < 3) {
        errors.name = "Lütfen ad ve soyadınızı yazın.";
      }
      if (!emailPattern.test(String(values.email || "").trim())) {
        errors.email = "Geçerli bir e-posta adresi girin (örn. ad@sirket.com).";
      }
      if (values.phone && !phonePattern.test(String(values.phone).trim())) {
        errors.phone = "Telefon numarasını 0212 555 04 20 biçiminde yazın.";
      }
      if (String(values.subject || "").trim().length < 3) {
        errors.subject = "Konu başlığı en az 3 karakter olmalı.";
      }
      if (String(values.message || "").trim().length < 30) {
        errors.message = "Dosyanızı değerlendirebilmemiz için en az 30 karakterlik bir açıklama yazın.";
      }
      if (values.consent !== "on") {
        errors.consent = "Devam edebilmek için aydınlatma metnini onaylamanız gerekir.";
      }

      ["name", "email", "phone", "subject", "message", "consent"].forEach((key) => {
        setError(key, errors[key]);
      });

      if (Object.keys(errors).length) {
        if (alertBox) {
          alertBox.hidden = false;
          alertBox.querySelector("p").textContent =
            "Formda eksik veya hatalı alanlar var. Lütfen işaretli alanları kontrol edin.";
          alertBox.focus();
        }
        return;
      }

      if (alertBox) alertBox.hidden = true;
      if (values.website) {
        showSuccess();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = "Gönderiliyor…";
      window.setTimeout(showSuccess, 700);
    });

    function showSuccess() {
      const now = new Date();
      const stamp = `${now.getFullYear()}`.slice(2) + String(now.getMonth() + 1).padStart(2, "0");
      const random = Math.random().toString(36).slice(2, 7).toUpperCase();
      const reference = `ALB-${stamp}-${random}`;
      form.hidden = true;
      if (success) {
        success.hidden = false;
        const refEl = success.querySelector("[data-reference]");
        if (refEl) refEl.textContent = reference;
        success.focus();
      }
    }
  }
})();
