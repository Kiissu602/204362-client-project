<template>
    <div>
        <v-row>
            <v-col class="text-center"><h1>สถานะการจัดส่งหนังสือ</h1></v-col>
        </v-row>
        
        <v-row v-if="status === 'กำลังจัดส่ง'">
            <v-col align="center">
                <v-img 
                    max-height="200" max-width="200"
                    src="https://st2.depositphotos.com/2885805/5578/v/600/depositphotos_55785883-stock-illustration-scooter-delivery-icon.jpg"
                    alt="">
                </v-img>
                <h2 style="color: blue">กำลังจัดส่ง!</h2>
            </v-col>
        </v-row>
        <v-row v-else-if="status === 'รอดำเนินการ'">
            <v-col align="center">
                <v-img 
                    max-height="200" max-width="200"
                    src="https://popgoesthereader.com/wp-content/uploads/2015/12/Banner-Waiting-On-Wednesday-Small.png"
                    alt="">
                </v-img>
                <h2 style="color: blue">รอดำเนินการ!</h2>
            </v-col>
        </v-row>
        <v-row v-else-if="status === 'กำลังดำเนินการ'">
            <v-col align="center">
                <v-img 
                    max-height="200" max-width="200"
                    src="https://img2.thaipng.com/20180324/gaw/kisspng-marketing-management-businessperson-sitting-man-5ab5f7798462e0.6690401215218748095423.jpg"
                    alt="">
                </v-img>
                <h2 style="color: blue">กำลังดำเนินการ!</h2>
            </v-col>
        </v-row>

        <v-row v-else-if="status === 'ส่งสำเร็จ'">
            <v-col align="center">
                <v-img 
                    max-height="200" max-width="200"
                    src="https://thumbs.dreamstime.com/b/delivery-man-courier-holding-box-giving-thumbs-up-clipart-picture-cartoon-character-91616404.jpg"
                    alt="">
                </v-img>
                <h2 style="color: blue">ส่งสำเร็จ!</h2>
            </v-col>
        </v-row>

        <v-row v-else-if="status === 'ส่งล้มเหลว'">
            <v-col align="center">
                <v-img 
                    max-height="200" max-width="200"
                    src="https://cdn4.vectorstock.com/i/1000x1000/44/23/young-boy-cartoon-crying-vector-2544423.jpg"
                    alt="">
                </v-img>
                <h2 style="color: blue">ส่งล้มเหลว!</h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col align="center">                
                <h2>รอสักครู่</h2>
                <h3>เวลาจัดส่ง: 12.30 </h3>
            </v-col>
        </v-row>

        <v-row>
            <v-col align="center">
                <h3>รายการ</h3>
                000123 Harry Potter <br>
                012324 Little Prince <br>
                122311 Yummy Yummy
            </v-col>
        </v-row>
    </div>
</template>



