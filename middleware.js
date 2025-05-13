import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc0NzIxOTE4NH0.9WAa906JIxAkxRd9tqXycqKWJqJErHeBpIVTaafub4U";
    // const token = await request.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
        return NextResponse.json({ message: "トークンがありません" });
    }

    try {
        const secretKey = new TextEncoder().encode("next-market2-app-book");
        const decodedJwt = await jwtVerify(token, secretKey);
        console.log("decodedJwt:", decodedJwt);
        return NextResponse.next();
    } catch {
        return NextResponse.json({ message: "トークンが正しくないので、ログインしてください" });
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
};
