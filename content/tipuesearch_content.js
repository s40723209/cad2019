var tipuesearch = {"pages": [{'title': 'Weeks', 'text': 'week2~5 \n week6~9 \n week10~14 \n wwweek15~18 \n', 'tags': '', 'url': 'Weeks.html'}, {'title': 'week2~5', 'text': 'week2 \n 網路設定與建立cmsimde網站 \n 1.下載 2019Fall可攜套件 .7z \xa0 \n 2.建立自己的倉儲 \n 3.網路proxy設定 \n \n week3 \n solvespace 編輯 \n 1. 查驗 git 版本(git 2.13 版本以上) \n 2. git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 3.打開Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt (713和714要加#) \n 4.cd solvespace/extlib/libpng>make build>cd build \n 5.cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release>mingw32-make \n 6.回到solvespace>make build>cd build \n 7.執行cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release>mingw32-make \n \n week4 \n 1.自主練習，編輯趕上之前的進度 \n week5 \n 1.下載solvespace所需的dlls \n 2.分組討論做影片 \n \n', 'tags': '', 'url': 'week2~5.html'}, {'title': 'week6~9', 'text': 'week6 \n 1.下載V-REP3、web_vrep2 \n 2.畫一台兩輪車 \n 3.操作vrep的兩輪車 \n 兩輪車完成圖 \n \n 操作影片: \n \n \n 增加start和stop按鈕:: \n \n week7 \n 1.solvespace納入學號 \n \n 2.solvespace繪圖認證 \n 圖1. \n 完成圖: \n \n 影片: \n \n 圖3. \n 完成圖: \n \n 影片: \n \n 圖4. \n 完成圖: \n \n 影片: \n \n 圖7 \n 完成圖: \n \n 影片: \n \n 圖8 \n 完成圖: \n \n 影片: \n \n 圖12 \n 完成圖: \n \n 影片: \n \n 圖13 \n 完成圖: \n \n 影片: \n \n 圖16 \n 完成圖: \n \n 影片: \n \n 圖17 \n 完成圖: \n \n 影片: \n \n 圖18 \n 完成圖: \n \n 影片: \n \n week8 \n 1.建立網誌內容管理(blog) \n \n 2.ssh 對 Github 連線 \n \n 3.建立webots \n \n', 'tags': '', 'url': 'week6~9.html'}, {'title': 'week10~14', 'text': '', 'tags': '', 'url': 'week10~14.html'}, {'title': 'week15~18', 'text': '', 'tags': '', 'url': 'week15~18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};