document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Sidebar Toggle
    const mobileToggle = document.getElementById('mobileNavToggle');
    const sidebar = document.getElementById('siteSidebar');

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('mobile-open');
        });

        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('mobile-open');
            }
        });
    }

    // 2. Copy Code Snippet Button
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const targetPane = btn.closest('.code-pane') || btn.closest('.dict-card');
            if (!targetPane) return;

            const codePre = targetPane.querySelector('.code-body pre') || targetPane.querySelector('pre');
            if (!codePre) return;

            const text = codePre.innerText;
            try {
                await navigator.clipboard.writeText(text);
                const originalHtml = btn.innerHTML;
                btn.innerHTML = '<span>✓ Copied</span>';
                btn.style.borderColor = 'var(--accent-emerald)';
                btn.style.color = 'var(--accent-emerald)';

                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.style.borderColor = '';
                    btn.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy', err);
            }
        });
    });

    // 3. Search Functionality
    const searchInput = document.getElementById('globalSearchInput');
    const searchResults = document.getElementById('searchResultsDropdown');

    if (searchInput && searchResults && typeof SEARCH_INDEX !== 'undefined') {
        // Detect relative path prefix depending on if we are in root or chapters/
        const isInsideChapters = window.location.pathname.includes('/chapters/');
        const basePath = isInsideChapters ? '' : 'chapters/';

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length < 2) {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
                return;
            }

            const matched = SEARCH_INDEX.filter(item =>
                item.term.toLowerCase().includes(query) ||
                item.desc.toLowerCase().includes(query) ||
                item.chapter.toLowerCase().includes(query)
            );

            if (matched.length === 0) {
                searchResults.innerHTML = `<div style="padding: 1rem; color: var(--text-dim); font-size: 0.85rem; text-align: center;">Không tìm thấy kết quả phù hợp với "${query}"</div>`;
                searchResults.style.display = 'block';
                return;
            }

            searchResults.innerHTML = matched.slice(0, 8).map(item => {
                let targetUrl = item.url;
                if (!isInsideChapters) {
                    targetUrl = basePath + item.url;
                }
                return `
          <a href="${targetUrl}" class="search-result-item">
            <div class="search-result-title">${item.term}</div>
            <div class="search-result-desc" style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${item.desc}</div>
            <div class="search-result-chapter">${item.chapter}</div>
          </a>
        `;
            }).join('');

            searchResults.style.display = 'block';
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });

        // Keyboard shortcut / to focus search
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }

    // 4. Highlight Active Chapter in Sidebar
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref && linkHref.includes(currentPath) && currentPath !== '') {
            link.classList.add('active');
        }
    });
});
