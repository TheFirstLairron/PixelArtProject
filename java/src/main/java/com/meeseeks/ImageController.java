package com.meeseeks;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.Base64;
import java.util.Map;

import javax.imageio.ImageIO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ImageController {

	@RequestMapping(path="/create-image", method=RequestMethod.POST)
	public @ResponseBody String CreateImage(@RequestBody()ImageData colors) {
		return "data:image/png;base64," + makeImageFromString(colors.image , 64, 64);
	}

	public static String makeImageFromString(String[][] strArray, int row_size, int col_size) {

		BufferedImage image = new BufferedImage(strArray.length, strArray[0].length, BufferedImage.TYPE_INT_RGB);
		
		for (int r = 0; r < row_size; ++r) {
			for (int c = 0; c < col_size; ++c) {
				Color myColor = Color.decode(strArray[r][c]);
				image.setRGB(r, c, myColor.getRGB());

			}
		} // end of second for loop

		final ByteArrayOutputStream os = new ByteArrayOutputStream();
		try {
			ImageIO.write(image, "PNG", os);
			return Base64.getEncoder().encodeToString(os.toByteArray());
		} catch (final IOException ioe) {
			throw new UncheckedIOException(ioe);
		}
	}
}
