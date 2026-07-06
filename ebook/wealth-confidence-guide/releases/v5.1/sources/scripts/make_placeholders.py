#!/usr/bin/env python3
"""
Generate dimensionally-correct BRANDED PLACEHOLDER images for the ebook.
These are NOT final art (RULE 9). Each placeholder shows the asset ID, a human
label, and its exact pixel size, in the approved palette, so page layout is
accurate until final images are supplied.
"""
import os
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.join(os.path.dirname(__file__), "..")
IMG_DIR = os.path.join(BASE, "assets", "images")
FONT_DIR = os.path.join(BASE, "assets", "fonts")
os.makedirs(IMG_DIR, exist_ok=True)

IVORY=(247,243,233); DEEP=(15,61,46); GOLD=(201,161,91); SAGE=(167,191,163)
SAND=(230,216,195); TAUPE=(214,205,184); EVERGREEN=(11,36,31)

def font(path, size):
    try: return ImageFont.truetype(os.path.join(FONT_DIR, path), size)
    except Exception: return ImageFont.load_default()

# id, filename, w, h, label
ASSETS = [
 ("IMG-01","IMG-01-cover.png",2550,3300,"COVER"),
 ("IMG-02","IMG-02-welcome.png",1890,1100,"Welcome editorial visual"),
 ("IMG-03","IMG-03-notice.png",1200,1200,"Notice"),
 ("IMG-04","IMG-04-pause.png",1200,1200,"Pause"),
 ("IMG-05","IMG-05-triggers.png",1200,1200,"Triggers"),
 ("IMG-06","IMG-06-shift.png",1200,1200,"One small shift"),
 ("IMG-07","IMG-07-environment.png",1200,1200,"Environment & friction"),
 ("IMG-08","IMG-08-repeat.png",1200,1200,"Repeat & consistency"),
 ("IMG-09","IMG-09-progress.png",1890,900,"Seven-day progress"),
 ("IMG-10","IMG-10-ws-day1.png",1890,600,"Day 1 worksheet header"),
 ("IMG-11","IMG-11-ws-day2.png",1890,600,"Day 2 worksheet header"),
 ("IMG-12","IMG-12-ws-trigger.png",1890,600,"Trigger-map worksheet header"),
 ("IMG-13","IMG-13-ws-shift.png",1890,600,"Small-shift worksheet header"),
 ("IMG-14","IMG-14-ws-environment.png",1890,600,"Environment checklist header"),
 ("IMG-15","IMG-15-ws-tracker.png",1890,600,"Repetition tracker header"),
 ("IMG-16","IMG-16-ws-plan.png",1890,600,"Personal-awareness plan header"),
 ("IMG-17","IMG-17-shift-card.png",1500,1000,"Today's Small Shift card"),
 ("IMG-18","IMG-18-brand.png",1890,1000,"Micro Saving Daily brand"),
]

def growth_circle(d, cx, cy, r, color, gold):
    d.ellipse([cx-r,cy-r,cx+r,cy+r], outline=color, width=max(3,r//18))
    bw=r//5
    for i,h in enumerate([0.9,1.4,2.0]):
        x=cx-bw*1.6+i*bw*1.3
        bh=int(r*0.28*h)
        d.rounded_rectangle([x,cy+ r//2 - bh, x+bw*0.8, cy+r//2], radius=bw//4, fill=color)
    d.ellipse([cx+r*0.35-r//12,cy-r*0.55-r//12,cx+r*0.35+r//12,cy-r*0.55+r//12], fill=gold)

def make(aid, fname, w, h, label):
    is_cover = aid=="IMG-01"
    bg = IVORY
    img=Image.new("RGB",(w,h),bg)
    d=ImageDraw.Draw(img)
    # border inset (safe area)
    m=int(min(w,h)*0.05)
    d.rectangle([m,m,w-m,h-m], outline=TAUPE, width=max(2,min(w,h)//300))
    if is_cover:
        # deep-green band
        band_top=int(h*0.30); band_bot=int(h*0.62)
        d.rectangle([0,band_top,w,band_bot], fill=DEEP)
        tf=font("CormorantGaramond-700.ttf", int(w*0.085))
        sf=font("Manrope-500.ttf", int(w*0.028))
        bf=font("Manrope-600.ttf", int(w*0.03))
        title=["The Wealth","Confidence Guide"]
        ty=band_top+int(h*0.03)
        for line in title:
            tb=d.textbbox((0,0),line,font=tf); tw=tb[2]-tb[0]
            d.text(((w-tw)//2,ty),line,font=tf,fill=IVORY); ty+=int(w*0.09)
        sub="Simple daily money-awareness shifts for calmer financial decisions."
        # wrap subtitle
        import textwrap
        for sl in textwrap.wrap(sub, width=40):
            sb=d.textbbox((0,0),sl,font=sf); sw=sb[2]-sb[0]
            d.text(((w-sw)//2,ty),sl,font=sf,fill=SAND); ty+=int(w*0.038)
        growth_circle(d, w//2, int(h*0.16), int(w*0.07), DEEP, GOLD)
        brand="MICRO SAVING DAILY"
        bb=d.textbbox((0,0),brand,font=bf); bw2=bb[2]-bb[0]
        d.text(((w-bw2)//2,int(h*0.72)),brand,font=bf,fill=DEEP)
        tag="Small habits. Stronger money confidence."
        tgf=font("CormorantGaramond-600italic.ttf", int(w*0.04))
        gb=d.textbbox((0,0),tag,font=tgf); gw=gb[2]-gb[0]
        d.text(((w-gw)//2,int(h*0.77)),tag,font=tgf,fill=GOLD)
    else:
        growth_circle(d, w//2, int(h*0.40), int(min(w,h)*0.14), DEEP, GOLD)
        lf=font("CormorantGaramond-600.ttf", max(20,int(min(w,h)*0.09)))
        idf=font("Manrope-600.ttf", max(14,int(min(w,h)*0.045)))
        dimf=font("Manrope-400.ttf", max(12,int(min(w,h)*0.038)))
        lb=d.textbbox((0,0),label,font=lf); lw=lb[2]-lb[0]
        d.text(((w-lw)//2,int(h*0.60)),label,font=lf,fill=DEEP)
        idl=f"{aid} \u00b7 PLACEHOLDER"
        ib=d.textbbox((0,0),idl,font=idf); iw=ib[2]-ib[0]
        d.text(((w-iw)//2,int(h*0.72)),idl,font=idf,fill=GOLD)
        dim=f"{w}\u00d7{h}px"
        db=d.textbbox((0,0),dim,font=dimf); dw=db[2]-db[0]
        d.text(((w-dw)//2,int(h*0.80)),dim,font=dimf,fill=(120,120,110))
    img.save(os.path.join(IMG_DIR,fname),"PNG")
    return fname

for a in ASSETS:
    print("wrote", make(*a))
print("done:",len(ASSETS),"placeholders")
