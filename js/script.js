// Interactive Client Scripts for Static Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Typing Effect
    const typingRoles = [
        "IT Support & Hardware Specialist",
        "S1 Pendidikan Teknik Elektronika UNJ (IPK 3.66)",
        "PCB Circuit & Electronics Designer",
        "Arduino IDE & IoT Developer",
        "Instruktur Coding & Robotika"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingTarget = document.getElementById('typingTarget');

    function typeEffect() {
        if (!typingTarget) return;
        const currentRole = typingRoles[roleIndex];
        
        if (isDeleting) {
            typingTarget.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTarget.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % typingRoles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // 2. Mobile Drawer Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('hidden');
            if (mobileDrawer.classList.contains('hidden')) {
                menuIcon.classList.replace('fa-times', 'fa-bars');
            } else {
                menuIcon.classList.replace('fa-bars', 'fa-times');
            }
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.add('hidden');
                menuIcon.classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // 3. Back to Top Observer
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                backToTop.classList.add('opacity-0', 'pointer-events-none');
            }
        });
    }

    // 4. Skills Category Tab Filtering
    const skillBtns = document.querySelectorAll('.skill-tab-btn');
    const skillItems = document.querySelectorAll('.skill-item');

    skillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillBtns.forEach(b => {
                b.classList.remove('bg-brand-500', 'text-white', 'shadow-lg');
                b.classList.add('text-slate-400');
            });
            btn.classList.add('bg-brand-500', 'text-white', 'shadow-lg');
            btn.classList.remove('text-slate-400');

            const cat = btn.getAttribute('data-category');
            skillItems.forEach(item => {
                if (cat === 'all' || item.getAttribute('data-category') === cat) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // 5. Static Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitIcon = document.getElementById('submitIcon');
    const submitText = document.getElementById('submitText');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Loading simulation
            submitBtn.disabled = true;
            submitIcon.className = 'fas fa-spinner fa-spin';
            submitText.textContent = 'Mengirim Pesan...';
            formAlert.classList.add('hidden');

            setTimeout(() => {
                submitBtn.disabled = false;
                submitIcon.className = 'fas fa-paper-plane';
                submitText.textContent = 'Kirim Pesan Sekarang';

                formAlert.className = 'p-4 rounded-xl text-sm font-medium bg-emerald-500/20 border border-emerald-500/50 text-emerald-300';
                formAlert.textContent = `Terima kasih, ${name}! Pesan Anda telah diterima oleh Muhamad Hasyim Ashary. Kami akan segera menghubungi Anda via ${email}.`;
                formAlert.classList.remove('hidden');
                contactForm.reset();
            }, 1000);
        });
    }
});

// 6. Quick Modal Functions
function openProjectModal(title, summary, highlights) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSummary').textContent = summary;
    document.getElementById('modalHighlights').textContent = highlights;
    document.getElementById('projectModal').classList.remove('hidden');
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.add('hidden');
}
